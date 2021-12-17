import React, { createContext, useState } from "react";

const UpdateAppointmentContext = createContext()

export function UpdateAppointmentProvider({ children }) {
    const [appointmentRefresh, setAppointmentRefresh] = useState(false)

    return (
        <UpdateAppointmentContext.Provider value={{ appointmentRefresh, setAppointmentRefresh }}>
            {children}
        </UpdateAppointmentContext.Provider>
    )
}

export default UpdateAppointmentContext
