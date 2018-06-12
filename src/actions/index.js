export const USER_CITY_UPDATE        =       "USER_CITY_UPDATE";

export const userChangeCity = (cityName) => ({
    type: USER_CITY_UPDATE,
    cityName
});