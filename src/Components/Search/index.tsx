import React, { ReactEventHandler } from 'react';
import styles from './Search.module.scss'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/Slices/filterSlice';


const Search: React.FC = () => {

    const dispatch = useDispatch()
    const [value, setValue] = React.useState<string>('')
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('')
        inputRef.current?.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
            console.log(str)
        }, 250),
        [],
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }
    return (
        <div className={styles.root} >
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M18.2617 15.2344C19.2383 13.6979 19.8112 11.875 19.8112 9.91536C19.8112 4.4401 15.3776 0 9.90885 0C4.43359 0 0 4.4401 0 9.91536C0 15.3906 4.43359 19.8307 9.90234 19.8307C11.888 19.8307 13.737 19.2448 15.2865 18.2422L15.7357 17.9297L22.806 25L25 22.7669L17.9362 15.6966L18.2617 15.2344ZM15.4557 4.375C16.9336 5.85286 17.7474 7.81901 17.7474 9.90885C17.7474 11.9987 16.9336 13.9648 15.4557 15.4427C13.9779 16.9206 12.0117 17.7344 9.92187 17.7344C7.83203 17.7344 5.86588 16.9206 4.38802 15.4427C2.91016 13.9648 2.09635 11.9987 2.09635 9.90885C2.09635 7.81901 2.91016 5.85286 4.38802 4.375C5.86588 2.89714 7.83203 2.08333 9.92187 2.08333C12.0117 2.08333 13.9779 2.89714 15.4557 4.375Z" fill="black" fillOpacity="0.67" />
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                placeholder="Поиск..."
                className={styles.input}
            />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            )}
        </div>
    )
};

export default Search;