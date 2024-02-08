import React, { useRef, useState } from 'react'
import styles from './title.module.scss'

type TitleProp = {
    address: {
        street: string
    }

    handleClickTitle(value: any): void
}

function Title({ address, handleClickTitle }: TitleProp) {
    // console.log(handleClickTitle)
    // const [color, setColor] = useState<string | undefined>(undefined)
    const h1Ref = useRef<HTMLHeadingElement>(null)
    function handleClickH1() {
        if (h1Ref.current) {
            h1Ref.current.style.color = "blue"
        }
        // setColor("red")
    }
    return (
        <>
            <h1 className={styles.title} onClick={handleClickH1} ref={h1Ref} >
                To Do List Typescript
            </h1>
        </>
    )
}

export default React.memo(Title)
