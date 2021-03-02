const Coveo = require('coveo-search-ui');

module.exports = function ConfigureQuickviewHeader(headerOptions = {}) {
    const defaultHeaderOptions = {
        resultLinkClass: Coveo['Salesforce'] ? 'SalesforceResultLink' : 'ResultLink',
        resultLinkOptions: {alwaysOpenInNewWindow: true},
        iconClass: 'Icon',
        iconOptions: {},
        generateCustomContent: (result, options, headerOptions) => undefined,
 
    };
 
    headerOptions = Object.assign(defaultHeaderOptions, headerOptions);
 
    Coveo.DomUtils.getQuickviewHeader = CustomQuickviewHeader(headerOptions);
}

const CustomQuickviewHeader = (headerOptions = {}) => (result, options, bindings) => {
    let date = '';
    if (options.showDate) {
        const dateValueFromResult = Coveo.Utils.getFieldValue(result, 'date');
        if (dateValueFromResult) {
            date = Coveo.DateUtils.dateTimeToString(new Date(dateValueFromResult));
        }
    }
 
    const {
        generateCustomContent,
        icon,
        className,
        resultLinkClass,
        resultLinkOptions,
        iconClass,
        iconOptions,
    } = headerOptions;
     
    const header = Coveo.$$('div', className ? {className} : undefined);
 
    const customContent = generateCustomContent(result, options, {icon, className});
 
    header.el.innerHTML = customContent || `
        <div class='coveo-quickview-right-header'>
            <span class='coveo-quickview-time'>${date}</span>
            <span class='coveo-quickview-close-button'>
            <span class='coveo-icon coveo-sprites-common-clear'></span>
            </span>
        </div>
        <div class='coveo-quickview-left-header'>
            <span class='coveo-quickview-icon coveo-small'></span>
            <a class='coveo-quickview-pop-up-reminder'></a>
        </div>
    `;
 
    let resolvedIconOptions = {small: true, ...iconOptions};
    if (icon) {
        resolvedIconOptions.value = icon;
    }
 
    const Icon = Coveo.Initialization.getRegisteredComponent(iconClass);
    new Icon(header.find('.coveo-quickview-icon'), resolvedIconOptions, bindings, result);
 
    const resultForResultLink = { ...result };
    if (options.title) {
        resultForResultLink.title = options.title;
    }
 
    const ResultLink = Coveo.Initialization.getRegisteredComponent(resultLinkClass)
    new ResultLink(header.find('.coveo-quickview-pop-up-reminder'), resultLinkOptions, bindings, resultForResultLink);
 
    return header;
}