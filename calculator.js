const input = document.querySelector(".input-screen")
var save = []
var number=[]
var cal=[]
var result=0
const i = document.querySelector(".btn-1")

const valueinput = (value)=>{
    
    save.push(value)
    input.value=save.join("");
    console.log(save)
}

const cleanScreen = () =>{
    save=[]
    number=[]
    result=0
    cal=[]
    input.value=save
}

const backspace = () =>{
    save.length = save.length-1
    input.value=save.join("")
}

const checksave=()=>
{
    if(save!=null)
    {
        let str = save.join("")
        for(let i=0;i<str.length;i++)
        {
            if(str[0]=='+'||str[0]=='-'||str[0]=='*'||str[0]=='/')
            {
                alert('nhap sai')
            }else if(str[i]=='+'||str[i]=='-'||str[i]=='*'||str[i]=='/'){
                cal.push(str[i])
                let str1 = str.slice(0,i)
                let str2 = str.slice(i+1,str.length)
                number.push(str1)
                number.push(str2)
            }
        }
        console.log(number[1],number[0])
        switch (cal[0]) {
            case "+":
                result=  Number(number[0])+Number(number[1])
                
                input.value=result
                cal=[]
                result=0;
                break;
            case "-":
                  result=  Number(number[0])-Number(number[1])
                  input.value=result
                  result=0;
                  cal=[]
                    break;
            case "*":
                        result=  Number(number[0])*Number(number[1])
                        input.value=result
                        result=0;
                        cal=[]
                        break;
            case "/":
                            result=  Number(number[0])/Number(number[1])
                            input.value=result
                            console.log(result)
                            result=0;
                            cal=[]
                            break;
                                
            default:
                break;
        }
    }
}
