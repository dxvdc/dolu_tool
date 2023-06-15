import { atom, useRecoilValue } from 'recoil'

export interface Entity {
    handle: number
    name: string
    position: {
        x: number
        y: number
        z: number
    },
    rotation: {
        x: number
        y: number
        z: number
    },
    frozen?: boolean
    invalid?: boolean
}


export type ObjectList = Array<Entity>

export const ObjectListAtom = atom<ObjectList>({key: "ObjectList", default: []})
export const ObjectNameAtom = atom<string>({ key: 'ObjectCurrentAccordionItem', default: 'prop_alien_egg_01' })
export const KeyboardLayoutAtom = atom<'QWERTY' | 'AZERTY'>({ key: 'KeyboardLayout', default: 'QWERTY' })

export const getObjectList = () => useRecoilValue(ObjectListAtom)
