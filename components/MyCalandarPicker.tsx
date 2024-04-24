"use client"

import React from 'react';
import { Calendar } from './ui/calendar';

interface Props {
    days: Date[]  | undefined;
    setDays: React.Dispatch<React.SetStateAction<Date[]>>;
}

export const MyCalandarPicker = ({ days, setDays }: Props) => {
    const handleSelect = (selectedDates: Date[] | undefined) => {
        if (selectedDates) {
           setDays(selectedDates);
        }
       };
    return (
        <Calendar
            mode='multiple'
            min={1}
            selected={days}
            onSelect={handleSelect}
            numberOfMonths={2}
            className="rounded-md border shadow"
        />
    );
}
