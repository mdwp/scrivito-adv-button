import * as React from 'react';
import * as Scrivito from 'scrivito';
import Scrollchor from 'react-scrollchor';
//import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

const AdvButtonWidgetComponent = Scrivito.connect(({ widget }) => {
  const target = widget.get('target');
  const rounded = widget.get('rounded') || 'small';


  let text = target && target.title();

  if (!text && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the button text in the widget properties.
        </h4>
    );
  }

  const classNames = ['btn'];
  classNames.push(widget.get('style') || 'btn-primary');

  if (rounded === 'small')
    classNames.push('adv-btn-round');
  else if (rounded === 'large')
    classNames.push('adv-btn-round-lg');

  if (target && typeof target.url() == 'string') {
    return (
      <Scrivito.LinkTag to={target} className={classNames.join(' ')}>
        {text}<i className="fa fa-angle-right fa-4" aria-hidden="true" />
      </Scrivito.LinkTag>
    );
  }
  else {
    return (
      <Scrollchor to={target.url()} className={classNames.join(' ')}>
        {text}<i className="fa fa-angle-down fa-4" aria-hidden="true" />
      </Scrollchor>
    )
  }
    
});

Scrivito.provideComponent('AdvButtonWidget', ({ widget }) => {
  const alignment = widget.get('alignment') || 'left';

    return (
      <div className={`text-${alignment}`}>
        <AdvButtonWidgetComponent widget={widget} />
      </div>
    );


});
