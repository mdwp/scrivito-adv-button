import * as Scrivito from 'scrivito';

const AdvButtonWidget = Scrivito.provideWidgetClass('AdvButtonWidget', {
    attributes: {
        target: 'link',
        alignment: ['enum', { values: ['left', 'center', 'right'] }],
        style: ['enum', {
            values: ['btn-primary',
                'btn-secondary',
                'btn-success',
                'btn-danger',
                'btn-warning',
                'btn-info',
                'btn-light',
                'btn-dark',
                'btn-clear'
            ]
        }],
        rounded: ['enum', { values: ['small', 'large'] }],
    },
});

export default AdvButtonWidget;