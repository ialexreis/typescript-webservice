export const validateZipCode = ( zipCode: string ): boolean => {
    let zipCodeSize = zipCode.replace("-", "").trim().length;
    let fourIntegers = zipCode.replace("-", "").substr(0,4);
    let threeIntegers = zipCode.replace("-", "").substr(4,7);

    if (zipCodeSize === 0 || zipCode === "00000000")
        return false;

    if (zipCode.search("-") === -1) return false;

    if ( fourIntegers.length != 4 ) return false;
    if ( threeIntegers.length != 3 ) return false;

    return zipCodeSize <= 7 && zipCodeSize >= 4;
};