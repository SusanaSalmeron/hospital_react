import React from 'react';



export default function Mailto({ email, subject = '', body = '', children }) {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
}