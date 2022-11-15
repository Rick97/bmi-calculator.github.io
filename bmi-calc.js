document.addEventListener('DOMContentLoaded', e => {
    let formElement = document.forms.myForm;

    formElement.addEventListener('submit', e => {
        e.preventDefault();
        let formData = new FormData(formElement); 
        let peso = formData.get('peso'); 
        let altezza = formData.get('altezza');
        let bmi=0;
        if(peso>0 && altezza>0){
            bmi=Math.round((peso/altezza**2) * 10) / 10;
        }
        if(bmi==0){
            document.getElementById('divForm').innerHTML+="<p>Your inputs are not correct</p>";
        }
        else{
            document.getElementById('divForm').innerHTML+="<p>Your BMI is "+bmi+"</p>";
        }
        
    });

});
