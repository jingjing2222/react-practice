import { useState, useEffect, useContext, createContext } from 'react'
import '@/App.css'

const THEME = {
    DEFAULT: 'system',
    DARK: 'dark',
    LIGHT: 'light',
}

const ThemeContext = createContext({
    theme: THEME.DEFAULT,
    setTheme: (state) => {},
})

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(THEME.DEFAULT)

    useEffect(() => {
        // theme 관련된 css 변경 로직
        console.log(theme)
        switch (theme) {
            case THEME.DARK:
                document.body.classList.add('dark')
                break
            case THEME.LIGHT:
                document.body.classList.remove('dark')
                break
            case THEME.DEFAULT:
            default:
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? document.body.classList.add('dark')
                    : document.body.classList.remove('dark')
                break
        }
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function ThemeSelect() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
            {Object
                // @ts-ignore
                .entries(THEME)
                .map((entry) => (
                    <option key={entry[0]} value={entry[1]}>
                        {entry[1]}
                    </option>
                ))}
        </select>
    )
}

function AaronLecture4() {
    return (
        <>
            <ThemeProvider>
                <h3>Theme</h3>
                <ThemeSelect />
            </ThemeProvider>
        </>
    )
}

export default AaronLecture4
