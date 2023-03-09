import country from "country-list-js";

const nations = country.names().sort();

const USER_INFO_KEY = "USER_INFO"

export { nations, USER_INFO_KEY };
