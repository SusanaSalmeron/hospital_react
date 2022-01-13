import React from 'react';
import { useField, useFormikContext } from 'formik';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function MonthCalendar({ ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props)
    return (
        <div>
            <Calendar
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val)
                }}
            />
        </div>
    )
}
