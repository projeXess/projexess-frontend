/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const initialValue = null;

function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <div className={`${isSelected && 'bg-[#3AA1FF] text-[#fff] rounded-full highlighted'}`}>
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </div>
    );



}

export default function Calendar() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <h1 className='font-bold text-[#414D55] text-center p-3'>Estimated Events by AI</h1>
            <DateCalendar
                defaultValue={initialValue}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        highlightedDays: [1, 25, 12],
                    } as any,
                }}
            />
        </LocalizationProvider>
    );
}
