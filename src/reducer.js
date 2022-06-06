export const reducer=(state,{type,payload})=>
{
    switch (type) {
        case "increment":
            {
                state.count++;
                return {...state}
            }
        case "decrement":
            {
                state.count--;
                return {...state}
            }
            
        case "add":
            {
                state.value=state.count + Number(payload);
                return {...state}
            }
        case "substract":
            {
                state.value=state.count-payload;
                return {...state}
            }
        case "multiply":
            {
                state.value=state.count*payload;
                return {...state}
            }
        case "divide":
            {
                state.value=Math.floor(state.count/payload);
                return {...state}
            }
    
        default:
            return state;
    }
    
}