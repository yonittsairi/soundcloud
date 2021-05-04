import React, { useRef } from 'react'
import { useHandlechange } from './../customHooks/hooks';
import { SearchSharp } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setSongs } from './../store/actions/song.actions';

export default function Filter() {
    const [values, setValues] = useHandlechange({});
    const dispatch = useDispatch('');
    const formRef = useRef('');

    const getSongs = (ev) => {
        ev.preventDefault()
        dispatch(setSongs(values))
        formRef.current.reset()
    }

    return (
        <div className="filter flex align-center space-between">
            <form ref={formRef} action="" onSubmit={getSongs} className="flex">
                <input name='title' placeholder="Search" onChange={setValues} ></input>

            </form>
            <SearchSharp fontSize={'large'} onClick={getSongs} />

        </div>
    )
}
