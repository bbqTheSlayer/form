import { createStore, bindActionCreators } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import reducer from './reducer';
import * as actions from './actions';
import Form from './components/form';
import InputSet from './crm_components/inputSet';
import Notifier from './crm_components/notifier';

const store = createStore(reducer);

const { dispatch } = store;

const { setStore } = bindActionCreators(actions, dispatch);

const getBaseAdress = (Arg = '') => {
    return 'api/api.php?';
    // return 'https://dict.mj-24.ru/api/mj?token=s11';
}

const setStoreField = (Field, Value) => {
    let State = store.getState();

    State[Field] = Value;

    setStore(State);
}

const makeRequestUrl = (base, params) => {
    let ParamArray = [];

    for (let key in params) {
        ParamArray.push(key + '=' + params[key]);
    }

    return base + '&' + ParamArray.join('&');
}

const notify = (Headline, Message, type='success') => {
    setStoreField('NotifyList', []);

    setStoreField('NotifyList', [
        {
            Headline: Headline,
            Message: Message,
            type: type
        }
    ]);

    renderNotification();
};

const sendServiceCard = () => {
    notify('Успешно', 'Заявка на активацию успешно создана', 'success');
    clearField();
    // const State = store.getState();

    // const Params = {
    //     token: 's11',
    //     method: "servicecard.check",
    //     DocNo: State.ServiceCard
    // };

    // axios
    //     .post(makeRequestUrl(getBaseAdress(), Params))
    //     .then((Response) => {
    //         console.log(Response);
            
    //         const Result = Response.data.data.result;

    //         if (Result) {

    //         } else {

    //         }
    //     });

};

const setEditorFieldValues = (Row) => {
    setStoreField('EditorServiceCardNumber', Row.ServiceCardNumber);
    setStoreField('EditorVIN', Row.VIN);
    setStoreField('EditorCarBrand', Row.CarBrand);
    setStoreField('EditorCarModel', Row.CarModel);
    setStoreField('EditorPhone', Row.Phone);
    setStoreField('EditorClient', Row.Client);
    setStoreField('EditorSTS', Row.STS);
    setStoreField('EditorPTS', Row.PTS);
    setStoreField('EditorRGN', Row.RGN);
};

const clearField = () => {
    setEditorFieldValues(
        {
            ServiceCardNumber: '',
            VIN: '',
            CarBrand: '',
            CarModel: '',
            Phone: '',
            Client: '',
            STS: '',
            PTS: '',
            RGN: ''
        }
    );
};

const renderForm = () => {
    ReactDOM.render(
        <Form
          Store={store.getState()}
          setStoreField={(Field, Value) => {
              setStoreField(Field, Value);
            }}
            sendServiceCard={sendServiceCard}  
          />, 
          document.getElementById('FormContainer')
    );
}

const renderSKFields = () => {
    ReactDOM.render(
        <InputSet
          State={store.getState()}
          FieldConfig={store.getState().FieldList}
          setStoreField={(Field, Value) => {
            setStoreField(Field, Value);
          }}
          />,
        document.getElementById('InputContainer')
    );
}

const renderFields = () => {
    ReactDOM.render(
        <InputSet
          State={store.getState()}
          FieldConfig={store.getState().DispensableList}
          setStoreField={(Field, Value) => {
            setStoreField(Field, Value);
          }}
          />,
        document.getElementById('OptionalContainer')
    );
}

const renderNotification = () => {
    ReactDOM.render(
        <Notifier
          NotifyList={store.getState().NotifyList}
          />,
        document.getElementById('NotificationContainer')
    );
};

const wndRefresh = () => {
    renderSKFields();
    renderFields();
    renderForm();


};

const init = () => {
    wndRefresh();
};

store.subscribe(() => {
    wndRefresh();
});

init();