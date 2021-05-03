import { useState } from 'react';

export const useHandlechange = () => {
    const [values, setValue] = useState({});
    return [values, function (ev) {
        var name = ev.target.name
        var value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        if (ev.target.type === "checkbox") {
            if (values[name]) {
                value = values[name] === true ? false : true
            }
            else value = true
        }
        setValue({ ...values, [name]: value })
    }]
}