const reducer = (
    state = {
        FieldList: [
            {
                type: 'input',
                Label: 'Сервисная карта*',
                placeholder: 'Номер',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorServiceCardNumber'
            },
            {
                type: 'input',
                Label: 'VIN*',
                placeholder: 'VIN номер',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorVIN'
            },
            {
                type: 'input',
                Label: 'Марка*',
                placeholder: 'Марка автомобиля',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorCarBrand'
            },
            {
                type: 'input',
                Label: 'Модель*',
                placeholder: 'Модель автомобиля',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorCarModel'
            },
            {
                type: 'input',
                Label: 'Телефон*',
                placeholder: 'Номер телефона',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorPhone'
            },
            {
                type: 'input',
                Label: 'Ф.И.О*',
                placeholder: 'Ф.И.О',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorClient'
            }
        ],

        DispensableList: [
            {
                type: 'input',
                Label: 'СТС',
                placeholder: 'Свидетельство регистрации тс',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorSTS'
            },
            {
                type: 'input',
                Label: 'ПТС',
                placeholder: 'Паспорт тс',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorPTS'
            },
            {
                type: 'input',
                Label: 'Рег. номер',
                placeholder: 'Регистрационный номер тс',
                ClassArray: ['input-lg', 'input-set'],
                CurrentValueVar: 'EditorRGN'
            }
        ],

        EditorServiceCardNumber: '',
        EditorVIN: '',
        EditorCarBrand: '',
        EditorCarModel: '',
        EditorPhone: '',
        EditorClient: '',
        EditorSTS: '',
        EditorPTS: '',
        EditorRGN: '',

        NotifyList: []

    },
    action
) => {

    switch (action.type){
        case 'SET_STATE':
            state = action.payload;
            return state;

    default:
        return state;
    }
};

export default reducer;