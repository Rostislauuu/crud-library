const ELEMENT_TO_SHOW = 'ELEMENT_TO_SHOW';

export const showElement = (element) => {
    alert('Name is "' + element.name + '"');

    return{
        type: ELEMENT_TO_SHOW, 
        payload: element
    }
}