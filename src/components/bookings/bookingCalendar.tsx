import React, { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import { useTranslation } from 'react-i18next';

export default function BookingCalendar({
    onDateSelected,
}: {
    onDateSelected?: (dateRange: DateRange | null) => void;
}) {
    const [selected, setSelected] = useState<DateRange | null>();

    const { t } = useTranslation();
    React.useEffect(() => {
        if (onDateSelected)
            onDateSelected(selected ?? null);
    }, [selected]);
    return (
        <>
            <div className="flex flex-wrap justify-center`">
                <button
                    className="input input-border mt-3 justify-center"
                    style={{ anchorName: '--rdp' } as React.CSSProperties}
                >
                    {selected
                        ? `${selected?.from?.toLocaleDateString()} - ${selected?.to?.toLocaleDateString()}`
                        : t('selectDateRange', {
                              defaultValue: 'Select date range'}
                            )}
                </button>

                <DayPicker
                    className="react-day-picker w-full"
                    mode="range"
                    selected={selected ?? undefined}
                    onSelect={setSelected}
                    
                    numberOfMonths={2}
                    disabled={{ before: new Date() }}
                    // classNames={{
                    //     root: `${classNames.root} flex-row react-day-picker w-sm`,
                    //     day: `${classNames.day} hover:bg-sky-500`,
                    //     month: 'flex-wrap w-2/3',
                    //     selected: `${classNames.selected}`,
                    //     today: `${classNames.today}`,
                    //     disabled: 'bg-base-500 text-gray-500',
                    //     range_middle: `${classNames.range_middle} bg-base var(--color-secondary-content) rounded hover:bg-primary-focus`,
                    //     range_start: `${classNames.range_start} bg-base var(--color-primary-content) rounded hover:bg-primary-focus`,
                    //     range_end: `${classNames.range_end} bg-base var(--color-primary-content) rounded hover:bg-primary-focus`,
                    // }}
                />
            </div>
        </>
    );
}
