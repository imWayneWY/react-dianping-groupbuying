export const USER_CITY_UPDATE        =       "USER_CITY_UPDATE";
export const USER_UPDATE             =       "USER_UPDATE";

export const userChangeCity = (cityName) => ({
    type: USER_CITY_UPDATE,
    cityName
});

export const userUpdate = (data) => ({
    type: USER_UPDATE,
    data
});