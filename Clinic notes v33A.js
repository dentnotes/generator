
Spry.Utils.addLoadListener(function() {

	
	

	function getElementsWithClass(TEST) {
    const elements = {};
    document.querySelectorAll(`.${TEST}`).forEach(element => {
        elements[element.id] = element;
    });
    return elements;
}

// Use the function to get all elements with the "auto-element" class
const autoElements = getElementsWithClass('TEST');	
	
	
    // Get references to HTML elements
   	const ptCheckbox = document.getElementById('ptCheckbox');
    const yearDropdown = document.getElementById('yearDropdown');
    const clinicDropdown = document.getElementById('clinicDropdown');
    const codeDropdown = document.getElementById('codeDropdown');
    const typeDropdown = document.getElementById('typeDropdown');
    const colgateCheckbox = document.getElementById('colgateCheckbox');
    const c3sCheckbox = document.getElementById('c3sCheckbox');
    const medicalHxCheckbox = document.getElementById('medicalHxCheckbox');
    const hxDropdown = document.getElementById('hxDropdown');
    const htpsrCheckbox = document.getElementById('htpsrCheckbox');
    const opgCheckbox = document.getElementById('opgCheckbox');
    const restoCheckbox = document.getElementById('restoCheckbox');
    const bwCheckbox = document.getElementById('bwCheckbox');
    const xylocaineCheckbox = document.getElementById('xylocaineCheckbox');
    const latypeCheckbox = document.getElementById('latypeCheckbox');
    const anestheticDropdown = document.getElementById('anestheticDropdown');
    const infilDropdown = document.getElementById('infilDropdown');
    const isolationCheckbox = document.getElementById('isolationCheckbox');
    const isolationDropdown = document.getElementById('isolationDropdown');
    const cavityCheckbox = document.getElementById('cavityCheckbox');
    const etchedCheckbox = document.getElementById('etchedCheckbox');
    const gradiaDropdown = document.getElementById('gradiaDropdown');
    const consentsCheckbox = document.getElementById('consentsCheckbox');
    const debridementCheckbox = document.getElementById('debridementCheckbox');
    const refinementCheckbox = document.getElementById('refinementCheckbox');
    const prophyCheckbox = document.getElementById('prophyCheckbox');
    const ohiCheckbox = document.getElementById('ohiCheckbox');
    const supervisorCheckbox = document.getElementById('supervisorCheckbox');
    const nvCheckbox = document.getElementById('nvCheckbox');
    const generatedText = document.getElementById('generatedText');
    const c3sTextInput = document.getElementById('c3sTextInput'); // Add this line
    const supervisorNameTextInput = document.getElementById('supervisornameTextInput');
	const A1TextInput = document.getElementById('A1TextInput');
	const selectAllRestoCheckbox = document.getElementById('selectAllRestoCheckbox');
	const B1 = document.getElementById('B1Checkbox');
	const selectSpecificRestoCheckbox = document.getElementById('selectSpecificSCCheckbox');
	
 
	

	

	addEventListener('change', generateText);
	addEventListener('input', generateText);

	
	
	B11Checkbox.addEventListener('change', toggleSubCheckboxes); // here 
	B12Checkbox.addEventListener('change', toggleSubCheckboxes); 
	B100Checkbox.addEventListener('change', toggleSubCheckboxes); 
	selectSpecificRestoCheckbox.addEventListener('change', toggleSubCheckboxes); 
	B105Checkbox.addEventListener('change', toggleSubCheckboxes);
	B25Checkbox.addEventListener('change', toggleSubCheckboxes); 
	selectAllRestoCheckbox.addEventListener('change', toggleSubCheckboxes);
	selectAllResto2Checkbox.addEventListener('change', toggleSubCheckboxes);
	G156Checkbox.addEventListener('change', toggleSubCheckboxes);
   //F/F
	ff1allCheckbox.addEventListener('change', toggleSubCheckboxes);
	ff2allCheckbox.addEventListener('change', toggleSubCheckboxes);
	ff3allCheckbox.addEventListener('change', toggleSubCheckboxes);
	ff4allCheckbox.addEventListener('change', toggleSubCheckboxes);
	ff6allCheckbox.addEventListener('change', toggleSubCheckboxes);
	endo1allCheckbox.addEventListener('change', toggleSubCheckboxes);

	


document.addEventListener('DOMContentLoaded', function() {
    toggleSubCheckboxes('B100Checkbox', ['B3Checkbox', 'B4Checkbox', 'B5Checkbox', 'B6Checkbox', 'B7Checkbox', 'B8Checkbox', 'B9Checkbox', 'B10Checkbox', 'B25Checkbox']);
});

function toggleSubCheckboxes(sourceCheckboxId, targetCheckboxIds) {
    const sourceCheckbox = document.getElementById(sourceCheckboxId);

    if (sourceCheckbox) {
        const isChecked = sourceCheckbox.checked;

        targetCheckboxIds.forEach(targetId => {
            const targetCheckbox = document.getElementById(targetId);
            if (targetCheckbox) {
                targetCheckbox.checked = isChecked;
            }
        });
    }
}

	


function toggleSubCheckboxes() {
        // Check or uncheck checkboxes B3, B4, B5, B6 based on B11Checkbox state
     B3Checkbox.checked = B100Checkbox.checked;
        B4Checkbox.checked = B100Checkbox.checked;
        B5Checkbox.checked = B100Checkbox.checked;
        B6Checkbox.checked = B100Checkbox.checked;
		B7Checkbox.checked = B100Checkbox.checked;
		B8Checkbox.checked = B100Checkbox.checked;
		B9Checkbox.checked = B100Checkbox.checked;
		B10Checkbox.checked = B100Checkbox.checked;
		B25Checkbox.checked = B100Checkbox.checked;
		B13Checkbox.checked = B100Checkbox.checked;
		B14Checkbox.checked = B100Checkbox.checked;
		B15Checkbox.checked = B100Checkbox.checked;
		B16Checkbox.checked = B100Checkbox.checked;
		B17Checkbox.checked = B100Checkbox.checked;
		B17Checkbox.checked = B100Checkbox.checked;
		B117Checkbox.checked = B100Checkbox.checked;
		B31Checkbox.checked = B100Checkbox.checked;
		B32Checkbox.checked = B100Checkbox.checked;
		B33Checkbox.checked = B100Checkbox.checked;
		B34Checkbox.checked = B100Checkbox.checked;
		B35Checkbox.checked = B100Checkbox.checked;
		B36Checkbox.checked = B100Checkbox.checked;
		htpsrCheckbox.checked = B100Checkbox.checked;
		opgCheckbox.checked = B100Checkbox.checked;
		B18Checkbox.checked = B100Checkbox.checked;
		B1Checkbox.checked = B100Checkbox.checked;
		B2Checkbox.checked = B100Checkbox.checked;
		B105Checkbox.checked = B100Checkbox.checked;
	ptCheckbox.checked = B100Checkbox.checked;
	c3sCheckbox.checked = B100Checkbox.checked;
	colgateCheckbox.checked = B100Checkbox.checked;
	medicalHxCheckbox.checked = B100Checkbox.checked;
	supervisorCheckbox.checked = B100Checkbox.checked;
	nvCheckbox.checked = B100Checkbox.checked;
	radioCheckbox.checked = B100Checkbox.checked;

	
	 ptff1Checkbox.checked = ff1allCheckbox.checked;
 ff1c3sCheckbox.checked = ff1allCheckbox.checked;
 ff1colgateCheckbox.checked = ff1allCheckbox.checked;
ff1medicalHxCheckbox.checked = ff1allCheckbox.checked;
 G13Checkbox.checked = ff1allCheckbox.checked;
 G13aCheckbox1.checked = ff1allCheckbox.checked;
 G14Checkbox.checked = ff1allCheckbox.checked;
	 G6Checkbox.checked = ff1allCheckbox.checked;
	 G7Checkbox.checked = ff1allCheckbox.checked;
	 G8Checkbox.checked = ff1allCheckbox.checked;
	 G10ACheckbox.checked = ff1allCheckbox.checked;
	 G11Checkbox.checked = ff1allCheckbox.checked;
	
	 G15Checkbox.checked = ff1allCheckbox.checked;
	 G16Checkbox.checked = ff1allCheckbox.checked;

	
	
	 
	ptff2Checkbox.checked = ff2allCheckbox.checked;
 ff2c3sCheckbox.checked = ff2allCheckbox.checked;
 ff2colgateCheckbox.checked = ff2allCheckbox.checked;
ff2medicalHxCheckbox.checked = ff2allCheckbox.checked;
 G22Checkbox.checked = ff2allCheckbox.checked;
 ff2supervisorCheckbox.checked = ff2allCheckbox.checked;
 G23Checkbox.checked = ff2allCheckbox.checked;
		G18Checkbox.checked = ff2allCheckbox.checked;
	G19Checkbox.checked = ff2allCheckbox.checked;
	G20Checkbox.checked = ff2allCheckbox.checked;
G21Checkbox.checked = ff2allCheckbox.checked;
G22Checkbox.checked = ff2allCheckbox.checked;
	G24Checkbox.checked = ff2allCheckbox.checked;
	G25Checkbox.checked = ff2allCheckbox.checked;

	
	
	 ptff3Checkbox.checked = ff3allCheckbox.checked;
 ff3c3sCheckbox.checked = ff3allCheckbox.checked;
 ff3colgateCheckbox.checked = ff3allCheckbox.checked;
ff3medicalHxCheckbox.checked = ff3allCheckbox.checked;
 ff3G22Checkbox.checked = ff3allCheckbox.checked;
 ff3supervisorCheckbox.checked = ff3allCheckbox.checked;
 ff3G23Checkbox.checked = ff3allCheckbox.checked;
	 G30Checkbox.checked = ff3allCheckbox.checked;
	G31Checkbox.checked = ff3allCheckbox.checked;
	G32Checkbox.checked = ff3allCheckbox.checked;
	G33Checkbox.checked = ff3allCheckbox.checked;
	G34Checkbox.checked = ff3allCheckbox.checked;
	G35Checkbox.checked = ff3allCheckbox.checked;
	G38Checkbox.checked = ff3allCheckbox.checked;
	
	 ptff4Checkbox.checked = ff4allCheckbox.checked;
 ff4c3sCheckbox.checked = ff4allCheckbox.checked;
 ff4colgateCheckbox.checked = ff4allCheckbox.checked;
ff4medicalHxCheckbox.checked = ff4allCheckbox.checked;
 ff4G22Checkbox.checked = ff4allCheckbox.checked;
 ff4supervisorCheckbox.checked = ff4allCheckbox.checked;
 ff4G23Checkbox.checked = ff4allCheckbox.checked;
	G49Checkbox.checked = ff4allCheckbox.checked;
	G50Checkbox.checked = ff4allCheckbox.checked;
	G51Checkbox.checked = ff4allCheckbox.checked;
	G52Checkbox.checked = ff4allCheckbox.checked;
	G54Checkbox.checked = ff4allCheckbox.checked;
 
	
	 ptff5Checkbox.checked = G156Checkbox.checked;
 ff5c3sCheckbox.checked = G156Checkbox.checked;
 ff5colgateCheckbox.checked = G156Checkbox.checked;
ff5medicalHxCheckbox.checked = G156Checkbox.checked;
 ff5G22Checkbox.checked = G156Checkbox.checked;
 ff5supervisorCheckbox.checked = G156Checkbox.checked;
 ff5G23Checkbox.checked = G156Checkbox.checked;
	G41Checkbox.checked = G156Checkbox.checked;
	G42Checkbox.checked = G156Checkbox.checked;
	G43Checkbox.checked = G156Checkbox.checked;
	G44Checkbox.checked = G156Checkbox.checked;
 
	
	 ptff6Checkbox.checked = ff6allCheckbox.checked;
 ff6c3sCheckbox.checked = ff6allCheckbox.checked;
 ff6colgateCheckbox.checked = ff6allCheckbox.checked;
ff6medicalHxCheckbox.checked = ff6allCheckbox.checked;
 ff6G22Checkbox.checked = ff6allCheckbox.checked;
 ff6supervisorCheckbox.checked = ff6allCheckbox.checked;
 ff6G23Checkbox.checked = ff6allCheckbox.checked;
	G55Checkbox.checked = ff6allCheckbox.checked;
	G56Checkbox.checked = ff6allCheckbox.checked;
 
	
	
	restoCheckbox.checked = selectAllRestoCheckbox.checked;
	bwCheckbox.checked = selectAllRestoCheckbox.checked;
	xylocaineCheckbox.checked = selectAllRestoCheckbox.checked;
	latypeCheckbox.checked = selectAllRestoCheckbox.checked;
	isolationCheckbox.checked = selectAllRestoCheckbox.checked;
	cavityCheckbox.checked = selectAllRestoCheckbox.checked;
	C12Checkbox.checked = selectAllRestoCheckbox.checked;
	etchedCheckbox.checked = selectAllRestoCheckbox.checked;
	C11Checkbox.checked = selectAllRestoCheckbox.checked;

	
	C110Checkbox.checked = selectAllResto2Checkbox.checked;
	C111Checkbox.checked = selectAllResto2Checkbox.checked;
	
	
	// S/C section
	consentsCheckbox.checked = selectSpecificRestoCheckbox.checked;
	debridementCheckbox.checked = selectSpecificRestoCheckbox.checked;
	refinementCheckbox.checked = selectSpecificRestoCheckbox.checked;
	prophyCheckbox.checked = selectSpecificRestoCheckbox.checked;
	ohiCheckbox.checked = selectSpecificRestoCheckbox.checked;
	
		B30Checkbox.checked = B105Checkbox.checked;
		B31Checkbox.checked = B105Checkbox.checked;
		B32Checkbox.checked = B105Checkbox.checked;
		B33Checkbox.checked = B105Checkbox.checked;
		B34Checkbox.checked = B105Checkbox.checked;
		B35Checkbox.checked = B105Checkbox.checked;
		B36Checkbox.checked = B105Checkbox.checked;
	
	ptendo1Checkbox.checked = endo1allCheckbox.checked;
 endo1c3sCheckbox.checked = endo1allCheckbox.checked;
 endo1colgateCheckbox.checked = endo1allCheckbox.checked;
endo1medicalHxCheckbox.checked = endo1allCheckbox.checked;
 endo1G22Checkbox.checked = endo1allCheckbox.checked;
 endo1supervisorCheckbox.checked = endo1allCheckbox.checked;
 endo1nvCheckbox.checked = endo1allCheckbox.checked;
	
	        E5Checkbox.checked = endo1allCheckbox.checked
		E7Checkbox.checked = endo1allCheckbox.checked
		E8Checkbox.checked = endo1allCheckbox.checked
		E9Checkbox.checked = endo1allCheckbox.checked
		E10Checkbox.checked = endo1allCheckbox.checked
E11Checkbox.checked = endo1allCheckbox.checked
E12Checkbox.checked = endo1allCheckbox.checked
E13Checkbox.checked = endo1allCheckbox.checked
		
		E15Checkbox.checked = endo1allCheckbox.checked
		E16Checkbox.checked = endo1allCheckbox.checked
		E17Checkbox.checked = endo1allCheckbox.checked
	E1Checkbox.checked = endo1allCheckbox.checked
E1ACheckbox.checked = endo1allCheckbox.checked
E1BCheckbox.checked = endo1allCheckbox.checked
E1CCheckbox.checked = endo1allCheckbox.checked
E2Checkbox.checked = endo1allCheckbox.checked
E3Checkbox.checked = endo1allCheckbox.checked
 E4Checkbox.checked = endo1allCheckbox.checked
	
E18Checkbox.checked = endo1allCheckbox.checked
E19Checkbox.checked = endo1allCheckbox.checked
E20Checkbox.checked = endo1allCheckbox.checked
E21Checkbox.checked = endo1allCheckbox.checked
E22Checkbox.checked = endo1allCheckbox.checked
E23Checkbox.checked = endo1allCheckbox.checked
E24Checkbox.checked = endo1allCheckbox.checked
E25Checkbox.checked = endo1allCheckbox.checked
E26Checkbox.checked = endo1allCheckbox.checked
E27Checkbox.checked = endo1allCheckbox.checked
 
	
	

	
		
        // Trigger the generateText function after changing the checkboxes
        generateText();
    }
    
	
	
    // Function to generate text based on selected options
 function generateText() {
    const text = [];
 
    // 011 Intro
    if (ptCheckbox.checked) {
        const A1TextInputValue = A1TextInput.value;
        const presentationText = `Pt. presented to ${yearDropdown.value} ${clinicDropdown.value} ${codeDropdown.value} for ${typeDropdown.value}`;

        if (A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${presentationText} ${A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(presentationText);
        }
    }
	 	 if (c3sCheckbox.checked) {
        const c3sTextInputValue = c3sTextInput.value;
        if (c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed');
        }}
	 
	 if (colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${hxDropdown.value}`);
		text.push('\n'); }
	 
		
	 
	 //F/F Primary
		 if (ptff1Checkbox.checked) {
        const ff1A1TextInputValue = ff1A1TextInput.value;
        const ff1presentationText = `Pt. presented to ${ff1yearDropdown.value} ${ff1clinicDropdown.value} ${ff1codeDropdown.value} for ${ff1typeDropdown.value}`;

        if (ff1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${ff1presentationText} ${ff1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(ff1presentationText);
        }
    }
		
 if (ff1c3sCheckbox.checked) {
               text.push('\n');
            text.push('3C’s confirmed');}   
		
		 if (ff1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.');
    }
  
		  if (ff1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff1hxDropdown.value}`);
		text.push('\n');
    }
	 
	 
	 // F/F Seconday Intro
	  	 if (ptff2Checkbox.checked) {
        const ff2A1TextInputValue = ff2A1TextInput.value;
        const ff2presentationText = `Pt. presented to ${ff2yearDropdown.value} ${ff2clinicDropdown.value} ${ff2codeDropdown.value} for ${ff2typeDropdown.value}`;

        if (ff2A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${ff2presentationText} ${ff2A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(ff2presentationText);
        }
    }
	  if (ff2c3sCheckbox.checked) {
        const ff2c3sTextInputValue = ff2c3sTextInput.value;
        if (ff2c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${ff2c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (ff2colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (ff2medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff2hxDropdown.value}`);
		text.push('\n');
    }
	 
	 //F/F Jaw Reg Intro
	  if (ptff3Checkbox.checked) {
        const ff3A1TextInputValue = ff3A1TextInput.value;
        const presentationText = `Pt. presented to ${ff3yearDropdown.value} ${ff3clinicDropdown.value} ${ff3codeDropdown.value} for ${ff3typeDropdown.value}`;

        if (ff3A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${presentationText} ${ff3A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(presentationText);
        }
    }
	  if (ff3c3sCheckbox.checked) {
        const ff3c3sTextInputValue = ff3c3sTextInput.value;
        if (ff3c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${ff3c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (ff3colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (ff3medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff3hxDropdown.value}`);
		text.push('\n');
    }
	
	 
	 //F/F Insertion Intro 
	  if (ptff5Checkbox.checked) {
        const ff5A1TextInputValue = ff5A1TextInput.value;
        const presentationText = `Pt. presented to ${ff5yearDropdown.value} ${ff5clinicDropdown.value} ${ff5codeDropdown.value} for ${ff5typeDropdown.value}`;

        if (ff5A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${presentationText} ${ff5A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(presentationText);
        }
    }
	  if (ff5c3sCheckbox.checked) {
        const ff5c3sTextInputValue = ff5c3sTextInput.value;
        if (ff5c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${ff5c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (ff5colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (ff5medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff5hxDropdown.value}`);
		text.push('\n');
    }



	 
	 // F/F Teeth Try in Intro 
	  if (ptff4Checkbox.checked) {
        const ff4A1TextInputValue = ff4A1TextInput.value;
        const presentationText = `Pt. presented to ${ff4yearDropdown.value} ${ff4clinicDropdown.value} ${ff4codeDropdown.value} for ${ff4typeDropdown.value}`;

        if (ff4A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${presentationText} ${ff4A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(presentationText);
        }
    }
	  if (ff4c3sCheckbox.checked) {
        const ff4c3sTextInputValue = ff4c3sTextInput.value;
        if (ff4c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${ff4c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (ff4colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (ff4medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff4hxDropdown.value}`);
		text.push('\n');
    }

	 
	 // F/F Review Intro
	 
	  if (ptff6Checkbox.checked) {
        const ff6a1TextInputValue = ff6A1TextInput.value;
        const presentationText = `Pt. presented to ${ff6yearDropdown.value} ${ff6clinicDropdown.value} ${ff6codeDropdown.value} for ${ff6typeDropdown.value}`;

        if (ff6a1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${presentationText} ${ff6A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(presentationText);
        }
    }
	  if (ff6c3sCheckbox.checked) {
        const ff6c3sTextInputValue = ff6c3sTextInput.value;
        if (ff6c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${ff6c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (ff6colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (ff6medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${ff6hxDropdown.value}`);
		text.push('\n');
    }
	 //Endo 1 Intro
	   	 if (ptendo1Checkbox.checked) {
        const endo1A1TextInputValue = endo1A1TextInput.value;
        const endo1presentationText = `Pt. presented to ${endo1yearDropdown.value} ${endo1clinicDropdown.value} ${endo1codeDropdown.value} for ${endo1typeDropdown.value}`;

        if (endo1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${endo1presentationText} ${endo1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(endo1presentationText);
        }
    }
	  if (endo1c3sCheckbox.checked) {
        const endo1c3sTextInputValue = endo1c3sTextInput.value;
        if (endo1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${endo1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (endo1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (endo1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${endo1hxDropdown.value}`);
		text.push('\n');
    }
	 
	 //endo intro 
	 if (ptendo2Checkbox.checked) {
        const endo2A1TextInputValue = endo2A1TextInput.value;
        const endo2presentationText = `Pt. presented to ${endo2yearDropdown.value} ${endo2clinicDropdown.value} ${endo2codeDropdown.value} for ${endo2typeDropdown.value}`;

        if (endo2A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${endo2presentationText} ${endo2A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(endo2presentationText);
        }
    }
	  if (endo2c3sCheckbox.checked) {
        const endo2c3sTextInputValue = endo2c3sTextInput.value;
        if (endo2c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${endo2c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (endo2colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (endo2medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${endo2hxDropdown.value}`);
		text.push('\n');
    }
	
	
		
	
 if (ptendo3Checkbox.checked) {
        const endo3A1TextInputValue = endo3A1TextInput.value;
        const endo3presentationText = `Pt. presented to ${endo3yearDropdown.value} ${endo3clinicDropdown.value} ${endo3codeDropdown.value} for ${endo3typeDropdown.value}`;

        if (endo3A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${endo3presentationText} ${endo3A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(endo3presentationText);
        }
    }
	  if (endo3c3sCheckbox.checked) {
        const endo3c3sTextInputValue = endo3c3sTextInput.value;
        if (endo3c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${endo3c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (endo3colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (endo3medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${endo3hxDropdown.value}`);
		text.push('\n');
    }
	
	
	
	
	
	  	 if (ptendo4Checkbox.checked) {
        const endo4A1TextInputValue = endo4A1TextInput.value;
        const endo4presentationText = `Pt. presented to ${endo4yearDropdown.value} ${endo4clinicDropdown.value} ${endo4codeDropdown.value} for ${endo4typeDropdown.value}`;

        if (endo4A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${endo4presentationText} ${endo4A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(endo4presentationText);
        }
    }
	  if (endo4c3sCheckbox.checked) {
        const endo4c3sTextInputValue = endo4c3sTextInput.value;
        if (endo4c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${endo4c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (endo4colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (endo4medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${endo4hxDropdown.value}`);
		text.push('\n');
    }
	 
	 // 011 Body
    if (B1Checkbox.checked) {
        const B1TextInputValue = B1TextInput.value;
        if (B1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`RFV: ${B1TextInputValue}`);
        } else {
            text.push('');
        }
    }
		

    if (B2Checkbox.checked) {
        const B2TextInputValue = B2TextInput.value;
        if (B2TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`CC: ${B2TextInputValue}`);
			text.push('\n');
        } else {
            text.push('');

        }
    }
		
		if (B30Checkbox.checked) {
        const B30TextInputValue = B30TextInput.value;
        if (B30TextInputValue.trim() !== '') {
            text.push('\n');
			text.push('Hx of Present Complaint');
			text.push('\n');
            text.push(`Site: ${B30TextInputValue}`);
        } else {
             text.push('');
        }
    }
		if (B31Checkbox.checked) {
        const B31TextInputValue = B31TextInput.value;
        if (B31TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Onset: ${B31TextInputValue}`);
        } else {
             text.push('');;
        }
    }
		if (B32Checkbox.checked) {
        const B32TextInputValue = B32TextInput.value;
        if (B32TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Character: ${B32TextInputValue}`);
        } else {
            text.push('');
        }
    }
		if (B33Checkbox.checked) {
        const B33TextInputValue = B33TextInput.value;
        if (B33TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Radiation: ${B33TextInputValue}`);
        } else {
             text.push('');
        }
    }
		if (B34Checkbox.checked) {
        const B34TextInputValue = B34TextInput.value;
        if (B34TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Alleviating Factors: ${B34TextInputValue}`);
        } else {
           text.push('');
        }
    }
		if (B35Checkbox.checked) {
        const B35TextInputValue = B35TextInput.value;
        if (B35TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Exacerbating factors: ${B35TextInputValue}`);
        } else {
          text.push('');
        }
    }
		if (B36Checkbox.checked) {
        const B36TextInputValue = B36TextInput.value;
        if (B36TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`Severity: ${B36TextInputValue}`);
			text.push('\n');
        } else {
             text.push('');
        }
    }
		
		if (B3Checkbox.checked) {
        text.push('\n\n');
        text.push('E/O examination: ');
    }
		if (B4Checkbox.checked) {
        text.push('Temporalis m.');
    }
		if (B5Checkbox.checked) {
        text.push(', masseter m.');
    }
		if (B6Checkbox.checked) {
        text.push(', TMJ');
    }
		if (B7Checkbox.checked) {
        text.push(', salivary glands');
    }
		if (B8Checkbox.checked) {
        text.push(', lymph nodes');
    }
		if (B9Checkbox.checked) {
        text.push(', muscles of facial expression');
    }
		if (B10Checkbox.checked) {
        text.push('- NAD.');
    }
		
	if (B13Checkbox.checked) {
		text.push('\n');
        text.push('I/OE: ');
    }
		if (B14Checkbox.checked) {
        text.push('FOM');
    }
		if (B15Checkbox.checked) {
        text.push(', tongue');
    }
		if (B16Checkbox.checked) {
        text.push(', buccal mucosa');
    }
		if (B17Checkbox.checked) {
        text.push(', Palatal Mucosa');
    }
		if (B117Checkbox.checked) {
        text.push('- NAD.');
			text.push('\n');
    }

		
        if (htpsrCheckbox.checked) {
			 text.push('\n');
            text.push('Hard tissue & PSR – as charted in ISOH.');
        }
	 if (radioCheckbox.checked) {
			 text.push('\n');
            text.push(`${radioDropdown.value}`);
			}
	   
	 if (B18CCheckbox.checked) {
			 const B18CTextInputValue = B18CTextInput.value;
        if (B18CTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Main Findings:');
			text.push(`${B18CTextInputValue}`);
			
        } else {
			 text.push('');  
           
       
    }
}
	 
	 if (BW1Checkbox.checked) {
			 const BW1TextInputValue = BW1TextInput.value;
        if (BW1TextInputValue.trim() !== '') {
             text.push('\n\n');
            text.push('BW taken:');
			text.push('\n');
			text.push('Interproximal caries:');
			text.push(`${BW1TextInputValue}`);
			
        } else {
			 text.push('');  }}

	   if (BW2Checkbox.checked) {
			 const BW2TextInputValue = BW2TextInput.value;
        if (BW2TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Occlusal caries:');
			text.push(`${BW2TextInputValue}`);
			
        } else {
			 text.push('');   }}
	   if (BW3Checkbox.checked) {
			 const BW3TextInputValue = BW3TextInput.value;
        if (BW3TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Secondary caries:');
			text.push(`${BW3TextInputValue}`);
			
        } else {
			 text.push('');   }}
	   if (BW4Checkbox.checked) {
			 const BW4TextInputValue = BW4TextInput.value;
        if (BW4TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Bone level: ');
			text.push(`${BW4TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 
	  if (BW5Checkbox.checked) {
			 const BW5TextInputValue = BW5TextInput.value;
        if (BW5TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Calculus: ');
			text.push(`${BW5TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 
	   if (BW6Checkbox.checked) {
			 const BW6TextInputValue = BW6TextInput.value;
        if (BW6TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Restoration:');
			text.push(`${BW6TextInputValue}`);
			
        } else {
			 text.push('');   }}
	  
	 
	   if (opg1Checkbox.checked) {
			 const opg1TextInputValue = opg1TextInput.value;
        if (opg1TextInputValue.trim() !== '') {
             text.push('\n\n');
            text.push('OPG taken');
			text.push('\n');
			text.push('Missing teeth:');
			text.push(`${opg1TextInputValue}`);
			
        } else {
			 text.push('');  }}

	   if (opg2Checkbox.checked) {
			 const opg2TextInputValue = opg2TextInput.value;
        if (opg2TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('8’s:');
			text.push(`${opg2TextInputValue}`);
			
        } else {
			 text.push('');   }}
	   if (opg3Checkbox.checked) {
			 const opg3TextInputValue = opg3TextInput.value;
        if (opg3TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Caries: ');
			text.push(`${opg3TextInputValue}`);
			
        } else {
			 text.push('');   }}
	   if (opg4Checkbox.checked) {
			 const opg4TextInputValue = opg4TextInput.value;
        if (opg4TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Restoration/dental work: ');
			text.push(`${opg4TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 
	  if (opg5Checkbox.checked) {
			 const opg5TextInputValue = opg5TextInput.value;
        if (opg5TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Bone level: ');
			text.push(`${opg5TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 
	   if (opg6Checkbox.checked) {
			 const opg6TextInputValue = opg6TextInput.value;
        if (opg6TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Mx sinus: ');
			text.push(`${opg6TextInputValue}`);
			
        } else {
			 text.push('');   }}
	   if (opg7Checkbox.checked) {
			 const opg7TextInputValue = opg7TextInput.value;
        if (opg7TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Condyles: ');
			text.push(`${opg7TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 
	   if (opg8Checkbox.checked) {
			 const opg8TextInputValue = opg8TextInput.value;
        if (opg8TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Ghost images: ');
			text.push(`${opg8TextInputValue}`);
			
        } else {
			 text.push('');   }}
	 

	 
		
	  if (B18Checkbox.checked) {
			 const B18TextInputValue = B18TextInput.value;
        if (B18TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Provisional Tx: ');
			text.push(`${B18TextInputValue}`);
			
        } else {
			 text.push('');  
            
       
    }
}
if (B19Checkbox.checked) {
    const B19TextInputValue = B19TextInput.value;
    if (B19TextInputValue.trim() !== '') {
        text.push('\n\n');
		text.push('Tx options discussed and presented to pt:');
		text.push('\n');
        text.push(`Systemic Phase: ${B19TextInputValue}`);
      
    } else {
        text.push('');      
    }
}

// For B20
if (B20Checkbox.checked) {
    const B20TextInputValue = B20TextInput.value;
    if (B20TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Acute Phase: ${B20TextInputValue}`);
        
    } else {
             text.push('');   }}


if (B21Checkbox.checked) {
    const B21TextInputValue = B21TextInput.value;
    if (B21TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Disease Control: ${B21TextInputValue}`);
       
    } else {text.push('');   }}

if (B22Checkbox.checked) {
    const B22TextInputValue = B22TextInput.value;
    if (B22TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Definitive phase: ${B22TextInputValue}`);
      
    } else {
             text.push('');  
      
    }
}

if (B23Checkbox.checked) {
    const B23TextInputValue = B23TextInput.value;
    if (B23TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Maintenance phase: ${B23TextInputValue}`);
      
    } else {
           text.push('');  
        
    }
}



if (B24Checkbox.checked) {
    const B24TextInputValue = B24TextInput.value;
    if (B24TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Extra comment: ${B24TextInputValue}`);
     
    } else {
             text.push('');  
    
    }
}



		

    if (restoCheckbox.checked) {
        text.push('\n');
        text.push('Tooth - required restoration due to decay/NCTL/defective margin');
    }

    if (bwCheckbox.checked) {
        text.push('\n');
        text.push('BW’s reviewed');
		
    }
        if (xylocaineCheckbox.checked) {
			 text.push('\n\n');
             text.push(`${laDropdown.value}`);
        }
        if (latypeCheckbox.checked) {
			 text.push('\n');
            text.push(`${anestheticDropdown.value} VIA ${infilDropdown.value}`);
			text.push('\ n\n');
        }
        if (isolationCheckbox.checked) {
			text.push('\n');
            text.push(isolationDropdown.value);
        }
        if (cavityCheckbox.checked) {
			 text.push('\n\n');
            text.push(cavityCheckbox.value);
			
        }
	 if (C12Checkbox.checked) {
			 text.push('\n');
            text.push(`${C12Dropdown.value}`);
		}

	 
	   if (cordCheckbox.checked) {
			 text.push('\n\n');
		    text.push('Retraction Cord size ');
            text.push(cordDropdown.value);
		   text.push(' placed with hemostat');
			
	   }
        if (etchedCheckbox.checked) {
			 text.push('\n\n');
            text.push(`Etched with 37% phosphoric acid, clearfil primer and bond. Gradia ${gradiaDropdown.value} composite placed and cured.`);
        }
	 if (C110Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Dentine conditioned w 10% polyacrylic acid`);
			}
	 if (C111Checkbox.checked) {
			 text.push('\n');
            text.push(`Restored with ${GICDropdown.value}`);
		 text.push(`${GICshadeDropdown.value} and cured`);
			}
	 if (C11Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Restoration polished, occlusion checked`);}
	 
	 
        if (consentsCheckbox.checked) {
			 text.push('\n\n');
            text.push('Pt consents to S/C – informed of risks bleeding, post op sensitivity, natural gaps between teeth');
        }
        if (debridementCheckbox.checked) {
			 text.push('\n');
            text.push('Debridement of all quadrants using ultrasonic scaler');
        }
        if (refinementCheckbox.checked) {
			 text.push('\n');
            text.push('Refinement using hand scalers');
        }
        if (prophyCheckbox.checked) {
			 text.push('\n\n');
            text.push('Prophy and fluoride applied');
        }
        if (ohiCheckbox.checked) {
			 text.push('\n\n');
            text.push('OHI provided');
        }
  
		
	 //Endo Consult Body 
	 
	 
 if (E1Checkbox.checked) {
	 text.push('\n\n');
             text.push('CLINICAL FINDINGS');
		 }

if (E1ACheckbox.checked) {

			 text.push('\n');
            text.push(`Discoloration: ${E1ADropdown.value}`);;
			 }
	 if (E1BCheckbox.checked) {
			 text.push('\n');
            text.push(`Swelling: ${E1BDropdown.value}`);
			}		if (E1CCheckbox.checked) {
			 text.push('\n');
            text.push(`Sinus tract: ${E1CDropdown.value}`);
			text.push('\n\n');}
	 
	
	 if (E2Checkbox.checked) {

			 text.push('\n');
            text.push(`PA radiograph taken. RADIOGRAPHIC EXAMINATION`);;
			 } 
	  
	 if (E3Checkbox.checked) {
			 const E3TextInputValue = E3TextInput.value;
        if (E3TextInputValue.trim() !== '') {
             text.push('\n'); 
			text.push('Carious w/wo exposure ');
			text.push(`${E3TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Carious w/wo exposure');
       
    }
}
	 if (E4Checkbox.checked) {
			 const E4TextInputValue = E4TextInput.value;
        if (E4TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Restored ');
			text.push(`${E4TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Restored');
       
    }
}
	   if (E5Checkbox.checked) {
			 const E5TextInputValue = E5TextInput.value;
        if (E5TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Pulp capping ');
			text.push(`${E5TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Pulp capping');
       
    }
}
	 
	   if (E7Checkbox.checked) {
			 const E7TextInputValue = E7TextInput.value;
        if (E7TextInputValue.trim() !== '') {
            text.push('\n'); 
			text.push('Hx of trauma ');
			text.push(`${E7TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Hx of trauma ');
       
    }
}
	 
	  if (E8Checkbox.checked) {
			 const E8TextInputValue = E8TextInput.value;
        if (E8TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Previous pulpotomy ');
			text.push(`${E8TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Previous pulpotomy');
       
    }
}
	   if (E9Checkbox.checked) {
			 const E9TextInputValue = E9TextInput.value;
        if (E9TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Previously root treated ');
			text.push(`${E9TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Previously root treated');
       
    }
}
	 
if (E10Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`PULP SENSIBILITY TESTS performed.`);}
	 
  if (E11Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
        if (E11TextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`Cold:${E11Dropdown.value}`);
			text.push(` ${E11TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push(`Cold:${E11Dropdown.value}`);
       
    }
}
		
	 if (E12Checkbox.checked) {
			 const E12TextInputValue = E12TextInput.value;
        if (E12TextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`EPT:${E12Dropdown.value}`);
			text.push(` ${E12TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push(`EPT:${E12Dropdown.value}`);
       
    }
}
	 
	 if (E13Checkbox.checked) {
			 const E13TextInputValue = E13TextInput.value;
        if (E13TextInputValue.trim() !== '') {
              text.push('\n'); 
			 text.push(`Palpation:${E13Dropdown.value}`);
			text.push(` ${E13TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push(`Palpation:${E13Dropdown.value}`);
       
    }
}
	 
	 if (E15Checkbox.checked) {
			 const E15TextInputValue = E15TextInput.value;
        if (E15TextInputValue.trim() !== '') {
            text.push('\n'); 
			 text.push(`Percussion: ${E15Dropdown.value}`);
			text.push(` ${E15TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push(`Percussion: ${E15Dropdown.value}`);
       
    }
}
	 
	 if (E16Checkbox.checked) {
			 const E16TextInputValue = E16TextInput.value;
        if (E16TextInputValue.trim() !== '') {
            text.push('\n'); 
			 text.push(`Mobility:${E16Dropdown.value}`);
			text.push(` ${E16TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push(`Mobility:${E16Dropdown.value}`);
       
    }
}
	 if (E17Checkbox.checked) {
			 const E17TextInputValue = E17TextInput.value;
        if (E17TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Abnormal probing: ');
			text.push(`${E17TextInputValue}`);
			
        } else {
			 text.push('');  
           }
}
	 
	 if (E18Checkbox.checked) {
			 text.push('\n\n');
            text.push(`PULPAL DX: ${E18Dropdown.value}`);
			}
	 
	 
	 if (E19Checkbox.checked) {
			 text.push('\n');
            text.push(`PERIAPICAL DX: ${E19Dropdown.value}`);}
			
	
	 
	 if (E22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Advantages & disadvantages of each Tx option were discussed with patient, written information sheets provided.`);
			;}
	  if (E23Checkbox.checked) {
			 text.push('\n');
            		text.push(`The patient understood the advantages, risks, as well as the cost involved in RCT, including the need for multiple visits, and consented for RCT.`);
			;}
	  if (E24Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Post-endodontic restorative options discussed:`);
			;}
	  if (E27Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt understood that the type of final restoration recommended after RCT will be determined by the amount of tooth structure remaining after removal of existing restoration & caries & that a post may be indicated to retain the core.`);
			;}
	 
	 

	 
	 
	 
	 //F/F 2nd Body
	 if (G18Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Custom tray adjusted with acrylic burs to 1mm short of sulcus, not interfering with frenum`);}
		 if (G19Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Border moulding was performed with the addition of compound stick to the periphery of trays`);}
			 
		if (G20Checkbox.checked) {
			 text.push('\n\n');
            text.push(`Max & mand secondary impression taken with ${G20Dropdown.value}. Post dam was marked with an indelible marker & transferred to the impression. Impression checked for quality, sterilized & bagged.`);
			}
			 
			  if (G21Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Lab card with instructions for construction of master cast & provision of occlusal wax rims in std dimensions written, scanned & sent to the lab.`);}
		
	//F/F Jaw Reg Body 
	 

if (G28Checkbox.checked) {
 	 const G28TextInputValue = G28TextInput.value;
        if (G28TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('VDR:');
			text.push(`${G28TextInputValue} mm est. from nose tip to chin. 3mm freeway space selected`);
			
        } else {
		      text.push('');
			    }
}

if (G29Checkbox.checked) {
    	 const G29TextInputValue = G29TextInput.value;
        if (G29TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('VDO of existing denture: ');
			text.push(`${G29TextInputValue}mm`);
			
        } else {
			 text.push('');  
            
       
    }
}

if (G30Checkbox.checked) {
    text.push('\n\n');
    text.push('Occlusal wax rims were checked for their stability.');
}

if (G31Checkbox.checked) {
    text.push('\n\n');
    text.push('Max wax rim was adjusted for lip support, tooth display & occlusal plane');
}

if (G32Checkbox.checked) {
    text.push('\n\n');
    text.push('Facial midline, canine lines & smile line were marked on the wax rims.');
}

if (G33Checkbox.checked) {
    text.push('\n\n');
    text.push('Centric relation was recorded & reproduceable.');
}

 if (G34Checkbox.checked) {
			 const G34TextInputValue = G34TextInput.value;
        if (G34TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Tooth Shade: ${G34TextInputValue} & ${G34Dropdown.value} anterior mould selected`);
			
        } else { 
              text.push('\n\n');
			text.push(`Tooth Shade: XX & ${G34Dropdown.value} anterior mould selected`);
			
    }
}

if (G35Checkbox.checked) {
    text.push('\n\n');
    text.push('Marked occlusal wax rims were sterilized & bagged. Lab card with instructions for articulation of master casts & set up of teeth for try-in was written, scanned & sent to the lab.');
}

	//Tooth Try in Body
	 if (G49Checkbox.checked) {
    text.push('\n\n');
    text.push('Wax-tooth was inserted to verify midline, CR, VDO, lip support, tooth position, buccal corridor, occlusal plane (w/ articulating paper), phonetics, & aesthetics.');
}
		 if (G50Checkbox.checked) {
    text.push('\n\n');
   text.push(`Bite position was reverified. Retake of jaw record ${G49Dropdown.value}`);
			}
	 
	 	 if (G51Checkbox.checked) {
    text.push('\n\n');
    text.push('Patient was given a mirror & was satisfied with the teeth size, colour, & the overall appearance of the denture. Patient’s approval to process the denture was obtained.');}
			 
	if (G52Checkbox.checked) {
    text.push('\n\n');
    text.push('Wax-tooth was sterilized & bagged. Lab card with instructions to seal wax rims, process the denture in 60:40 original & light pink acrylic, & finish for insertion was written, scanned & sent to the lab.');}
	 
	 // F/F Insert Body 
	 if (G41Checkbox.checked) {
    text.push('\n\n');
    text.push('Denture base areas & peripheral borders were checked for high spots/overextended areas using pressure indicator paste. Frenum is cleared.');}
	 
	  if (G42Checkbox.checked) {
    text.push('\n\n');
    text.push('Effective post dam was confirmed w/ extrusion forces');}
	  if (G43Checkbox.checked) {
    text.push('\n\n');
    text.push('Occlusion was reverified with articulating paper.');}
	  if (G44Checkbox.checked) {
    text.push('\n\n');
    text.push('Denture hygiene instructions given (i.e. to clean with soft brush & gentle soap, to remove denture at night & to soak in diluted white vinegar or Milton antibacterial tablets)');}
	 
		 //F/F Review Body
 
	 if (G55Checkbox.checked) {
    text.push('\n\n');
    text.push('Patient interview & intraoral examination were performed to review for any post-operative issues due to the denture.');
}

if (G56Checkbox.checked) {
    text.push('\n\n');
    text.push('FINDINGS > NAD ');
}

if (G57Checkbox.checked) {
    text.push('\n');
    text.push('Ulcers in frenum region, sulcus & mylohyoid ridge due to lack of clearance');
}

if (G58Checkbox.checked) {
    text.push('\n');
    text.push('Correction of occlusion required');
}

if (G59Checkbox.checked) {
    text.push('\n');
    text.push('Cheek biting due to lack of buccal overjet');
}

if (G60Checkbox.checked) {
    text.push('\n');
    text.push('Restricted food or chewing ');
}

if (G61Checkbox.checked) {
    text.push('\n');
    text.push('Lack of retention (i.e. overextension, processing errors)');
}

if (G62Checkbox.checked) {
    text.push('\n');
    text.push('Too bulky in palatal or buccal surfaces');
}

		
		//011 End 
		  if (supervisorCheckbox.checked) {
        const supervisorNameTextInputValue = supervisorNameTextInput.value;
        if (supervisorNameTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Supervisor:Dr ${supervisorNameTextInputValue}`);
			   } else {
			 text.push('\n\n');  
            text.push('Supervisor:Dr '); }
    }
   if (nvCheckbox.checked) {
			 const nvTextInputValue = nvTextInput.value;
        if (nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
	  if (waitlistCheckbox.checked) {
			 const waitlistTextInputValue = waitlistTextInput.value;
        if (waitlistTextInputValue.trim() !== '') {
             text.push('\n');
	
			text.push(`${waitlistTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('Patient placed on general waitlist and seperated');}}
	 
	 // F/F Prim End 
	 	if (G13Checkbox.checked) {
			 const G13TextInputValue = G13TextInput.value;
        if (G13TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(` ${G13TextInputValue}`);
			
        } else {
			 text.push('\n\n');  
            text.push('Pt well on discharge');}}
		  
	 if (G13aCheckbox1.checked) {
			 const G13aTextInputValue1 = G13aTextInput1.value;
        if (G13aTextInputValue1.trim() !== '') {
             text.push('\n\n');
			text.push('Supervisor: Dr ');
			text.push(`${G13aTextInputValue1}`);
		} else {
           text.push('\n\n');
			text.push('Supervisor: Dr '); }}
	 
		  
	if (G14Checkbox.checked) {
			 const G14TextInputValue = G14TextInput.value;
        if (G14TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('N/V:');
			text.push(`${G14TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: F/F secondary impression');}}
	 
	  // F/F 2ndary End 
	 
	 	if (G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (ff2supervisorCheckbox.checked) {
			 const ff2supervisornameTextInputValue = ff2supervisornameTextInput.value;
        if (ff2supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${ff2supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	if (G23Checkbox.checked) {
			 text.push('\n');  
            text.push('N/V: F/F Jaw registration');}
	 
	 // F/F Jaw reg End
	 if (ff3G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (ff3supervisorCheckbox.checked) {
			 const ff3supervisornameTextInputValue = ff3supervisornameTextInput.value;
        if (ff3supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${ff3supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	if (ff3G23Checkbox.checked) {
			 text.push('\n');  
            text.push('N/V: F/F Teeth Try in');}
	 
	  //F/F Insertion end 
	 if (ff5G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Written denture instructions given & explained. Pt well on discharge`);}
	 
		  
	 if (ff5supervisorCheckbox.checked) {
			 const ff5supervisornameTextInputValue = ff5supervisornameTextInput.value;
        if (ff5supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${ff5supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	if (ff5G23Checkbox.checked) {
			 text.push('\n');  
            text.push('N/V: F/F Review');}
	 
	 // F/F Teeth Try in end 
	 
	 
if (ff4G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (ff4supervisorCheckbox.checked) {
			 const ff4supervisornameTextInputValue = ff4supervisornameTextInput.value;
        if (ff4supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${ff4supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	if (ff4G23Checkbox.checked) {
			 text.push('\n');  
            text.push('N/V: F/F Insertion');}

	 // F/F Review end 
	 if (ff6G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (ff6supervisorCheckbox.checked) {
			 const ff6supervisornameTextInputValue = ff6supervisornameTextInput.value;
        if (ff6supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${ff6supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	if (ff6G23Checkbox.checked) {
			 text.push('\n');  
            text.push('N/V: Review 2.0');}
	 
	 //Endo 1 End
	 
	 	if (endo1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (endo1supervisorCheckbox.checked) {
			 const endo1supervisornameTextInputValue = endo1supervisornameTextInput.value;
        if (endo1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${endo1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (endo1nvCheckbox.checked) {
			 const endo1nvTextInputValue = endo1nvTextInput.value;
        if (endo1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${endo1nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
	 
		if (endo4G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (endo4supervisorCheckbox.checked) {
			 const endo4supervisornameTextInputValue = endo4supervisornameTextInput.value;
        if (endo4supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${endo4supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (endo4nvCheckbox.checked) {
			 const endo4nvTextInputValue = endo4nvTextInput.value;
        if (endo4nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${endo4nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
			  
			  if (endo2G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (endo2supervisorCheckbox.checked) {
			 const endo2supervisornameTextInputValue = endo2supervisornameTextInput.value;
        if (endo2supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${endo2supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (endo2nvCheckbox.checked) {
			 const endo2nvTextInputValue = endo2nvTextInput.value;
        if (endo2nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${endo2nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
			  	if (endo3G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (endo3supervisorCheckbox.checked) {
			 const endo3supervisornameTextInputValue = endo3supervisornameTextInput.value;
        if (endo3supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${endo3supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (endo3nvCheckbox.checked) {
			 const endo3nvTextInputValue = endo3nvTextInput.value;
        if (endo3nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${endo3nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
 


	 
	 // Lab Instructions 
	 if (G15Checkbox.checked) {
					 text.push('\n\n');  
            text.push('Lab Instructions'); 
			  text.push('\n'); 
		  text.push('Please construct diagnostic models from alginate impressions.');
		  
		  }
		if (G16Checkbox.checked) {
			 text.push('\n');
            text.push(`Please construct custom trays ${G16Dropdown.value}`);
			text.push('\n\n');}
	
	 if (G24Checkbox.checked) {
					 text.push('\n\n');  
            text.push('Lab Instructions'); 
			  text.push('\n'); 
		  text.push('Please construct master cast in stone with 3mm land area, scribe post-dam as indicated on Max impression, depth of post dam');
		  
		  }
	  if (G25Checkbox.checked) { 
       			  text.push('\n'); 
		  text.push('Please provide occlusal wax rims to standard dimensions.');
		  
		  }
	 if (G38Checkbox.checked) {
		text.push('\n\n');	 
		text.push('Lab Instructions');
		 text.push('\n');
		 text.push('Please articulate master casts with bite registration provided.')
			}
 if (G38ACheckbox.checked) {
	   text.push('\n'); 
	  text.push(`Please set up Max & Mand teeth for try-in in shade XX, ${G34Dropdown.value} anterior mold`);}
	 
	 if (G38BCheckbox.checked) {
	   text.push('\n'); 
	  text.push(`Please mould to match existing denture based on denture impression provided.`);}
	 
	   if (G38CCheckbox.checked) {
	   text.push('\n'); 
	  text.push(`Please try to achieve edge-to-edge occlusion even if max teeth have to be brought forward.`);}
	 
	  if (G54Checkbox.checked) {
		text.push('\n\n');	 
		text.push('Lab Instructions');
		 text.push('\n');
		 text.push('Please do not move the teeth, seal wax rims & finesse wax up in anterior region.')
		  	 text.push('\n');
		 text.push('Please process in 60:40 original & light pink acrylic & finish for insertion.')}
	 
	 
	 
	 
		
		
		
		
		
		
		
		
		
		
		
	        generatedText.value = text.join(''); 
    }
   


   
 function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
        // Do not call generateText() here
        adjustGeneratedTextWidth(); mvb
    }



   

   
  



});
