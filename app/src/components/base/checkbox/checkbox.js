import React, { Component } from 'react';

export default class BaseCheckbox extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }



    changeHadler(e)
    {
        this.props.onChange(e.target.checked);
    }



    getChecked()
    {
        return this.props.checked;
    }



    getKey()
    {
        if (typeof this.props.key == 'string') {
            return this.props.key;
        } else {
            return '';
        }
    }


    render() {
        return  (
            <label htmlFor="">
                <input
                  key={this.getKey()}
                  type="checkbox"
                  checked={this.getChecked()}
                  onChange={(e) => {
                    this.changeHadler(e);
                  }}
                  />&nbsp;Да
            </label>
        )
    }
}