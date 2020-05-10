//import React from 'react';

export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: any) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps }
        }
        return u;
    })
};