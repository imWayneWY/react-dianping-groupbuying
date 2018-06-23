export const USER_CITY_UPDATE        =       "USER_CITY_UPDATE";
export const USER_UPDATE             =       "USER_UPDATE";
export const STORE_ADD               =       "STORE_ADD";
export const STORE_DEL               =       "STORE_DEL";



export const userChangeCity = (cityName) => ({
    type: USER_CITY_UPDATE,
    cityName
});

export const userUpdate = (data) => ({
    type: USER_UPDATE,
    data
});

export const storeAdd = (itemID) => ({
    type: STORE_ADD,
    itemID
});

export const storeDel = (itemID) => ({
    type: STORE_DEL,
    itemID
})