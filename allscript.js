



Spry.Utils.addLoadListener(function() {
	Spry.$$("#button1").addEventListener('click', function(e){ toggleSection('dxSection1') }, false);
	Spry.$$("#button2").addEventListener('click', function(e){ toggleSection('011Section1') }, false);
	Spry.$$("#button3").addEventListener('click', function(e){ toggleSection('paeds011Section1') }, false);
	Spry.$$("#button4").addEventListener('click', function(e){ toggleSection('013Section1') }, false);
	Spry.$$("#button5").addEventListener('click', function(e){ toggleSection('013eSection1') }, false);
	Spry.$$("#button6").addEventListener('click', function(e){ toggleSection('ppSection') }, false);
	Spry.$$("#button7").addEventListener('click', function(e){ toggleSection('scaleAndCleansSection') }, false);
	Spry.$$("#button8").addEventListener('click', function(e){ toggleSection('116Section1') }, false);
	Spry.$$("#button9").addEventListener('click', function(e){ toggleSection('perioSection1') }, false);
	Spry.$$("#button10").addEventListener('click', function(e){ toggleSection('221Section') }, false);
	Spry.$$("#button11").addEventListener('click', function(e){ toggleSection('250Section') }, false);
	Spry.$$("#button12").addEventListener('click', function(e){ toggleSection('surgSection1') }, false);
	Spry.$$("#button13").addEventListener('click', function(e){ toggleSection('oralsurgSection') }, false);
	Spry.$$("#button14").addEventListener('click', function(e){ toggleSection('endoSection1') }, false);
	Spry.$$("#button15").addEventListener('click', function(e){ toggleSection('endo1Section') }, false);
	Spry.$$("#button16").addEventListener('click', function(e){ toggleSection('endo2Section') }, false);
	Spry.$$("#button17").addEventListener('click', function(e){ toggleSection('endo3Section') }, false);
	Spry.$$("#button18").addEventListener('click', function(e){ toggleSection('endo4Section') }, false);
	Spry.$$("#button19").addEventListener('click', function(e){ toggleSection('restoSection1') }, false);
	Spry.$$("#button20").addEventListener('click', function(e){ toggleSection('restorationSection') }, false);
	Spry.$$("#button21").addEventListener('click', function(e){ toggleSection('prosSection1') }, false);
	Spry.$$("#button22").addEventListener('click', function(e){ toggleSection('dentureSection') }, false);
	Spry.$$("#button23").addEventListener('click', function(e){ toggleSection('denture1Section') }, false);
	Spry.$$("#button24").addEventListener('click', function(e){ toggleSection('denture2Section') }, false);
	Spry.$$("#button25").addEventListener('click', function(e){ toggleSection('denture3Section') }, false);
	Spry.$$("#button26").addEventListener('click', function(e){ toggleSection('denture6Section') }, false);
	Spry.$$("#button27").addEventListener('click', function(e){ toggleSection('denture5Section') }, false);
	Spry.$$("#button28").addEventListener('click', function(e){ toggleSection('denture50Section') }, false);
	Spry.$$("#button29").addEventListener('click', function(e){ toggleSection('denturepp1Section') }, false);
	Spry.$$("#button30").addEventListener('click', function(e){ toggleSection('denturepp2Section') }, false);
	Spry.$$("#button31").addEventListener('click', function(e){ toggleSection('denturepp3Section') }, false);
	Spry.$$("#button32").addEventListener('click', function(e){ toggleSection('denturepp4Section') }, false);
	Spry.$$("#button33").addEventListener('click', function(e){ toggleSection('denturepp5Section') }, false);
	Spry.$$("#button34").addEventListener('click', function(e){ toggleSection('denturepp6Section') }, false);
	Spry.$$("#button35").addEventListener('click', function(e){ toggleSection('othercodesSection') }, false);
	Spry.$$("#button36").addEventListener('click', function(e){ toggleSection('ppcodesSection') }, false);
	Spry.$$("#button37").addEventListener('click', function(e){ toggleSection('otherSection1') }, false);
	Spry.$$("#button38").addEventListener('click', function(e){ toggleSection('psrSection1') }, false);
	Spry.$$("#button39").addEventListener('click', function(e){ toggleSection('icdasSection1') }, false);
	Spry.$$("#button40").addEventListener('click', function(e){ toggleSection('laSection1') }, false);
    Spry.$$("#button41").addEventListener('click', function(e){ toggleSection('crown1Section') }, false);
 Spry.$$("#button42").addEventListener('click', function(e){ toggleSection('crown2Section') }, false);
     Spry.$$("#button43").addEventListener('click', function(e){ toggleSection('crown3Section') }, false);
     Spry.$$("#button44").addEventListener('click', function(e){ toggleSection('crown4Section') }, false);
	  Spry.$$("#button166").addEventListener('click', function(e){ toggleSection('oralsurg2Section') }, false);
	
Spry.$$("#button400").addEventListener('click', function(e){ toggleSection('perioclassSection1') }, false);	
	Spry.$$("#button401").addEventListener('click', function(e){ toggleSection('eteethSection1') }, false);	
	Spry.$$("#button402").addEventListener('click', function(e){ toggleSection('elistSection1') }, false);

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
	  const generatedText = document.getElementById('generatedText');
   	
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
  
  

  const c3sTextInput = document.getElementById('c3sTextInput'); // Add this line
    const supervisorNameTextInput = document.getElementById('supervisornameTextInput');
	const A1TextInput = document.getElementById('A1TextInput');
	const selectAllRestoCheckbox = document.getElementById('selectAllRestoCheckbox');
	const B1 = document.getElementById('B1Checkbox');
	const selectSpecificRestoCheckbox = document.getElementById('selectSpecificSCCheckbox');
	  

	
	
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
    crown1allCheckbox.addEventListener('change', toggleSubCheckboxes);
crown2allCheckbox.addEventListener('change', toggleSubCheckboxes);
    crown3allCheckbox.addEventListener('change', toggleSubCheckboxes);
    crown4allCheckbox.addEventListener('change', toggleSubCheckboxes);
	 F1Checkbox.addEventListener('change', toggleSubCheckboxes);
     E221Checkbox.addEventListener('change', toggleSubCheckboxes);
    E250Checkbox.addEventListener('change', toggleSubCheckboxes);
endo2allCheckbox.addEventListener('change', toggleSubCheckboxes);
endo4allCheckbox.addEventListener('change', toggleSubCheckboxes);
endo3allCheckbox.addEventListener('change', toggleSubCheckboxes);

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
	ptresto1Checkbox.checked = selectAllRestoCheckbox.checked;
 resto1c3sCheckbox.checked = selectAllRestoCheckbox.checked;
 resto1colgateCheckbox.checked = selectAllRestoCheckbox.checked;
resto1medicalHxCheckbox.checked = selectAllRestoCheckbox.checked;
 resto1G22Checkbox.checked = selectAllRestoCheckbox.checked;
 resto1supervisorCheckbox.checked = selectAllRestoCheckbox.checked;
 resto1nvCheckbox.checked = selectAllRestoCheckbox.checked;
	
	// S/C section
	consentsCheckbox.checked = selectSpecificRestoCheckbox.checked;
	debridementCheckbox.checked = selectSpecificRestoCheckbox.checked;
	refinementCheckbox.checked = selectSpecificRestoCheckbox.checked;
	prophyCheckbox.checked = selectSpecificRestoCheckbox.checked;
	ohiCheckbox.checked = selectSpecificRestoCheckbox.checked;
    ptsc1Checkbox.checked = selectSpecificSCCheckbox.checked;
 sc1c3sCheckbox.checked = selectSpecificSCCheckbox.checked;
 sc1colgateCheckbox.checked = selectSpecificSCCheckbox.checked;
sc1medicalHxCheckbox.checked = selectSpecificSCCheckbox.checked;
 sc1G22Checkbox.checked = selectSpecificSCCheckbox.checked;
 sc1supervisorCheckbox.checked = selectSpecificSCCheckbox.checked;
 sc1nvCheckbox.checked = selectSpecificSCCheckbox.checked;
    
    
    ptperio1Checkbox.checked = E221Checkbox.checked;
 perio1c3sCheckbox.checked = E221Checkbox.checked;
 perio1colgateCheckbox.checked = E221Checkbox.checked;
perio1medicalHxCheckbox.checked = E221Checkbox.checked;
 perio1G22Checkbox.checked = E221Checkbox.checked;
 perio1supervisorCheckbox.checked = E221Checkbox.checked;
 perio1nvCheckbox.checked = E221Checkbox.checked;
     P25Checkbox.checked = E221Checkbox.checked;
      P10Checkbox.checked = E221Checkbox.checked;
      P1ACheckbox.checked = E221Checkbox.checked;
     P1BCheckbox.checked = E221Checkbox.checked;
     
    
ptperio2Checkbox.checked = E250Checkbox.checked;
perio2c3sCheckbox.checked = E250Checkbox.checked;
perio2colgateCheckbox.checked = E250Checkbox.checked;
perio2medicalHxCheckbox.checked = E250Checkbox.checked;
p40Checkbox5.checked = E250Checkbox.checked;
p40Checkbox6.checked = E250Checkbox.checked;
p40Checkbox7.checked = E250Checkbox.checked;
p40Checkbox8.checked = E250Checkbox.checked;
p40Checkbox9.checked = E250Checkbox.checked;
p40Checkbox10.checked = E250Checkbox.checked;
perio2G22Checkbox.checked = E250Checkbox.checked;
perio2supervisorCheckbox.checked = E250Checkbox.checked;
perio2nvCheckbox.checked = E250Checkbox.checked;
    
	
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
    
    
ptendo2Checkbox.checked = endo2allCheckbox.checked;
endo2c3sCheckbox.checked = endo2allCheckbox.checked;
endo2colgateCheckbox.checked = endo2allCheckbox.checked;
endo2medicalHxCheckbox.checked = endo2allCheckbox.checked;
E40Checkbox.checked = endo2allCheckbox.checked;
E41Checkbox.checked = endo2allCheckbox.checked;
E42Checkbox.checked = endo2allCheckbox.checked;
E43Checkbox.checked = endo2allCheckbox.checked;
E44Checkbox.checked = endo2allCheckbox.checked;
E45Checkbox.checked = endo2allCheckbox.checked;
E46Checkbox.checked = endo2allCheckbox.checked;
E47Checkbox.checked = endo2allCheckbox.checked;
E48Checkbox.checked = endo2allCheckbox.checked;
endo2G22Checkbox.checked = endo2allCheckbox.checked;
endo2supervisorCheckbox.checked = endo2allCheckbox.checked;
endo2nvCheckbox.checked = endo2allCheckbox.checked;

    
    
ptendo4Checkbox.checked = endo4allCheckbox.checked;
endo4c3sCheckbox.checked = endo4allCheckbox.checked;
endo4colgateCheckbox.checked = endo4allCheckbox.checked;
endo4medicalHxCheckbox.checked = endo4allCheckbox.checked;

E80Checkbox.checked = endo4allCheckbox.checked;
E82Checkbox.checked = endo4allCheckbox.checked;
E83Checkbox.checked = endo4allCheckbox.checked;
E85Checkbox.checked = endo4allCheckbox.checked;
E86Checkbox.checked = endo4allCheckbox.checked;
E87Checkbox.checked = endo4allCheckbox.checked;
E88Checkbox.checked = endo4allCheckbox.checked;
E89Checkbox.checked = endo4allCheckbox.checked;
E90Checkbox.checked = endo4allCheckbox.checked;
E91Checkbox.checked = endo4allCheckbox.checked;
E92Checkbox.checked = endo4allCheckbox.checked;
E93Checkbox.checked = endo4allCheckbox.checked;

E94Checkbox.checked = endo4allCheckbox.checked;
E95Checkbox.checked = endo4allCheckbox.checked;

endo4G22Checkbox.checked = endo4allCheckbox.checked;
endo4supervisorCheckbox.checked = endo4allCheckbox.checked;
endo4nvCheckbox.checked = endo4allCheckbox.checked;

// Additional checkboxes mentioned in the comment
ptendo3Checkbox.checked = endo3allCheckbox.checked;
endo3c3sCheckbox.checked = endo3allCheckbox.checked;
endo3colgateCheckbox.checked = endo3allCheckbox.checked;
endo3medicalHxCheckbox.checked = endo3allCheckbox.checked;

E50Checkbox.checked = endo3allCheckbox.checked;
E51Checkbox.checked = endo3allCheckbox.checked;

E53Checkbox.checked = endo3allCheckbox.checked;
E54Checkbox.checked = endo3allCheckbox.checked;
E55Checkbox.checked = endo3allCheckbox.checked;

E56Checkbox.checked = endo3allCheckbox.checked;
E57Checkbox.checked = endo3allCheckbox.checked;
E58Checkbox.checked = endo3allCheckbox.checked;

E59Checkbox.checked = endo3allCheckbox.checked;
E60Checkbox.checked = endo3allCheckbox.checked;

E61Checkbox.checked = endo3allCheckbox.checked;
E62Checkbox.checked = endo3allCheckbox.checked;
E63Checkbox.checked = endo3allCheckbox.checked;

E64Checkbox.checked = endo3allCheckbox.checked;
E65Checkbox.checked = endo3allCheckbox.checked;
E66Checkbox.checked = endo3allCheckbox.checked;

E67Checkbox.checked = endo3allCheckbox.checked;
E68Checkbox.checked = endo3allCheckbox.checked;


endo3G22Checkbox.checked = endo3allCheckbox.checked;
endo3supervisorCheckbox.checked = endo3allCheckbox.checked;
endo3nvCheckbox.checked = endo3allCheckbox.checked;

    
    

ptff1Checkbox.checked = ff1allCheckbox.checked;
ff1c3sCheckbox.checked = ff1allCheckbox.checked;
ff1colgateCheckbox.checked = ff1allCheckbox.checked;
ff1medicalHxCheckbox.checked = ff1allCheckbox.checked;
G13Checkbox.checked = ff1allCheckbox.checked;
G13aCheckbox1.checked = ff1allCheckbox.checked;
G14Checkbox.checked = ff1allCheckbox.checked;

 
	
	// Crown Section

document.getElementById('ptcrown1Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('crown1c3sCheckbox').checked = crown1allCheckbox.checked;
document.getElementById('crown1colgateCheckbox').checked = crown1allCheckbox.checked;
document.getElementById('crown1medicalHxCheckbox').checked = crown1allCheckbox.checked;


document.getElementById('J1Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J2Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J3Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J4Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J5Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J6Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J7Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J8Checkbox').checked = crown1allCheckbox.checked;

document.getElementById('J10Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J11Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J12Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J13Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J14Checkbox').checked = crown1allCheckbox.checked;


// Relevant Abutment/Adjacent Teeth Assessment Section


// TX PLAN Section


document.getElementById('J38Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J39Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J40Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J41Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J43Checkbox').checked = crown1allCheckbox.checked;
    document.getElementById('J44Checkbox').checked = crown1allCheckbox.checked;

document.getElementById('J47Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('J48Checkbox').checked = crown1allCheckbox.checked;
// Assuming crown1allCheckbox is the master checkbox for this section
document.getElementById('crown1G22Checkbox').checked = crown1allCheckbox.checked;
document.getElementById('crown1supervisorCheckbox').checked = crown1allCheckbox.checked;
document.getElementById('crown1nvCheckbox').checked = crown1allCheckbox.checked;


	document.getElementById('ptcrown2Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('crown2c3sCheckbox').checked = crown2allCheckbox.checked;
document.getElementById('crown2colgateCheckbox').checked = crown2allCheckbox.checked;
document.getElementById('crown2medicalHxCheckbox').checked = crown2allCheckbox.checked;

document.getElementById('J50Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J51Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J52Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J53Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J54Checkbox').checked = crown2allCheckbox.checked;

document.getElementById('J60Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J61Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J62Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J63Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J64Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J65Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J66Checkbox').checked = crown2allCheckbox.checked;

document.getElementById('J67Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('J68Checkbox').checked = crown2allCheckbox.checked;

document.getElementById('J69Checkbox').checked = crown2allCheckbox.checked;

document.getElementById('crown2G22Checkbox').checked = crown2allCheckbox.checked;
document.getElementById('crown2supervisorCheckbox').checked = crown2allCheckbox.checked;
document.getElementById('crown2nvCheckbox').checked = crown2allCheckbox.checked;

    
    
    document.getElementById('ptcrown3Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3c3sCheckbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3colgateCheckbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3medicalHxCheckbox').checked = crown3allCheckbox.checked;

document.getElementById('J80Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J81Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J82Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J83Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J84Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J85Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J86Checkbox').checked = crown3allCheckbox.checked;

document.getElementById('J87Checkbox').checked = crown3allCheckbox.checked;

document.getElementById('J88Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3G22Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3supervisorCheckbox').checked = crown3allCheckbox.checked;
document.getElementById('crown3nvCheckbox').checked = crown3allCheckbox.checked;

document.getElementById('J91Checkbox').checked = crown3allCheckbox.checked;
document.getElementById('J92Checkbox').checked = crown3allCheckbox.checked;

		document.getElementById('ptcrown4Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4c3sCheckbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4colgateCheckbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4medicalHxCheckbox').checked = crown4allCheckbox.checked;

document.getElementById('J93Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J99Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J100Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J101Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J102Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J103Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J104Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('J105Checkbox').checked = crown4allCheckbox.checked;

document.getElementById('J106Checkbox').checked = crown4allCheckbox.checked;

document.getElementById('J107Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4G22Checkbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4supervisorCheckbox').checked = crown4allCheckbox.checked;
document.getElementById('crown4nvCheckbox').checked = crown4allCheckbox.checked;

    document.getElementById('ptsurg1Checkbox').checked = F1Checkbox.checked;
document.getElementById('surg1c3sCheckbox').checked = F1Checkbox.checked;
document.getElementById('surg1colgateCheckbox').checked = F1Checkbox.checked;
document.getElementById('surg1medicalHxCheckbox').checked = F1Checkbox.checked;

document.getElementById('surg1G22Checkbox').checked = F1Checkbox.checked;
document.getElementById('surg1supervisorCheckbox').checked = F1Checkbox.checked;
document.getElementById('surg1nvCheckbox').checked = F1Checkbox.checked;

document.getElementById('o1Checkbox3').checked = F1Checkbox.checked;
document.getElementById('o1Checkbox3A').checked = F1Checkbox.checked;
document.getElementById('o1Checkbox4').checked = F1Checkbox.checked;
document.getElementById('o1Checkbox5').checked = F1Checkbox.checked;

document.getElementById('OA11Checkbox').checked = F1Checkbox.checked;
document.getElementById('OA12Checkbox').checked = F1Checkbox.checked;
document.getElementById('o1Checkbox6').checked = F1Checkbox.checked;
    document.getElementById('o1Checkbox7').checked = F1Checkbox.checked;
    document.getElementById('o1Checkbox8A').checked = F1Checkbox.checked;
    document.getElementById('o1Checkbox8').checked = F1Checkbox.checked;
    document.getElementById('o1Checkbox10').checked = F1Checkbox.checked;
    
        // Trigger the generateText function after changing the checkboxes
        generateText();
    }
       

    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
        // Do not call generateText() here
        adjustGeneratedTextWidth(); mvb
    }



var button = document.getElementById("button");

function myFunction() {
  var copyText = document.getElementById("generatedText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}
button.addEventListener("click",myFunction);

 function generateText(event) {
      // Check if the input field should be excluded
      if (event.target.id !== 'generatedText') {
        // Perform your actions here
        console.log('Text generated:', event.target.value);
      }
    }

    // Get all input elements
  
    addEventListener('input', generateText);

	
	

addEventListener('change', generateText);
	
	
	

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
     
     
     
     //Crown Intro 
     
     if (ptcrown2Checkbox.checked) {
        const crown2A1TextInputValue = crown2A1TextInput.value;
        const crown2presentationText = `Pt. presented to ${crown2yearDropdown.value} ${crown2clinicDropdown.value} ${crown2codeDropdown.value} for ${crown2typeDropdown.value}`;

        if (crown2A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${crown2presentationText} ${crown2A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(crown2presentationText);
        }
    }
	  if (crown2c3sCheckbox.checked) {
        const crown2c3sTextInputValue = crown2c3sTextInput.value;
        if (crown2c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${crown2c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (crown2colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (crown2medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${crown2hxDropdown.value}`);
		text.push('\n');
    }
	
	
		
	
 if (ptcrown3Checkbox.checked) {
        const crown3A1TextInputValue = crown3A1TextInput.value;
        const crown3presentationText = `Pt. presented to ${crown3yearDropdown.value} ${crown3clinicDropdown.value} ${crown3codeDropdown.value} for ${crown3typeDropdown.value}`;

        if (crown3A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${crown3presentationText} ${crown3A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(crown3presentationText);
        }
    }
	  if (crown3c3sCheckbox.checked) {
        const crown3c3sTextInputValue = crown3c3sTextInput.value;
        if (crown3c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${crown3c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (crown3colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (crown3medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${crown3hxDropdown.value}`);
		text.push('\n');
    }
	
     // OR INtro 
     
     if (ptsurg1Checkbox.checked) {
        const surg1A1TextInputValue = surg1A1TextInput.value;
        const surg1presentationText = `Pt. presented to ${surg1yearDropdown.value} ${surg1clinicDropdown.value} ${surg1codeDropdown.value} for ${surg1typeDropdown.value}`;

        if (surg1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${surg1presentationText} ${surg1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(surg1presentationText);
        }
    }
	  if (surg1c3sCheckbox.checked) {
        const surg1c3sTextInputValue = surg1c3sTextInput.value;
        if (surg1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${surg1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (surg1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (surg1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${surg1hxDropdown.value}`);
		text.push('\n');
    }
	
	
	
	
	
	  	 if (ptcrown4Checkbox.checked) {
        const crown4A1TextInputValue = crown4A1TextInput.value;
        const crown4presentationText = `Pt. presented to ${crown4yearDropdown.value} ${crown4clinicDropdown.value} ${crown4codeDropdown.value} for ${crown4typeDropdown.value}`;

        if (crown4A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${crown4presentationText} ${crown4A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(crown4presentationText);
        }
    }
	  if (crown4c3sCheckbox.checked) {
        const crown4c3sTextInputValue = crown4c3sTextInput.value;
        if (crown4c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${crown4c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (crown4colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (crown4medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${crown4hxDropdown.value}`);
		text.push('\n');
    }
	
     if (ptcrown1Checkbox.checked) {
        const crown1A1TextInputValue = crown1A1TextInput.value;
        const crown1presentationText = `Pt. presented to ${crown1yearDropdown.value} ${crown1clinicDropdown.value} ${crown1codeDropdown.value} for ${crown1typeDropdown.value}`;

        if (crown1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${crown1presentationText} ${crown1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(crown1presentationText);
        }
    }
	  if (crown1c3sCheckbox.checked) {
        const crown1c3sTextInputValue = crown1c3sTextInput.value;
        if (crown1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${crown1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (crown1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (crown1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${crown1hxDropdown.value}`);
		text.push('\n');
    }
     
     // Perio Intro 
     
     if (ptperio1Checkbox.checked) {
        const perio1A1TextInputValue = perio1A1TextInput.value;
        const perio1presentationText = `Pt. presented to ${perio1yearDropdown.value} ${perio1clinicDropdown.value} ${perio1codeDropdown.value} for ${perio1typeDropdown.value}`;

        if (perio1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${perio1presentationText} ${perio1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(perio1presentationText);
        }
    }
	  if (perio1c3sCheckbox.checked) {
        const perio1c3sTextInputValue = perio1c3sTextInput.value;
        if (perio1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${perio1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (perio1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (perio1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${perio1hxDropdown.value}`);
		text.push('\n');
    }
	
	
		
	
 if (ptperio2Checkbox.checked) {
        const perio2A1TextInputValue = perio2A1TextInput.value;
        const perio2presentationText = `Pt. presented to ${perio2yearDropdown.value} ${perio2clinicDropdown.value} ${perio2codeDropdown.value} for ${perio2typeDropdown.value}`;

        if (perio2A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${perio2presentationText} ${perio2A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(perio2presentationText);
        }
    }
	  if (perio2c3sCheckbox.checked) {
        const perio2c3sTextInputValue = perio2c3sTextInput.value;
        if (perio2c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${perio2c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (perio2colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (perio2medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${perio2hxDropdown.value}`);
		text.push('\n');
    }
	
	
	
	//Resto Intro 
	
	  	 if (ptresto1Checkbox.checked) {
        const resto1A1TextInputValue = resto1A1TextInput.value;
        const resto1presentationText = `Pt. presented to ${resto1yearDropdown.value} ${resto1clinicDropdown.value} ${resto1codeDropdown.value} for ${resto1typeDropdown.value}`;

        if (resto1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${resto1presentationText} ${resto1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(resto1presentationText);
        }
    }
	  if (resto1c3sCheckbox.checked) {
        const resto1c3sTextInputValue = resto1c3sTextInput.value;
        if (resto1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${resto1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (resto1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (resto1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${resto1hxDropdown.value}`);
		text.push('\n');
    }
     
     
     // S/C Intro 
     
     
      if (ptsc1Checkbox.checked) {
        const sc1A1TextInputValue = sc1A1TextInput.value;
        const sc1presentationText = `Pt. presented to ${sc1yearDropdown.value} ${sc1clinicDropdown.value} ${sc1codeDropdown.value} for ${sc1typeDropdown.value}`;

        if (sc1A1TextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`${sc1presentationText} ${sc1A1TextInputValue}`);
        } else {
            text.push('\n');
            text.push(sc1presentationText);
        }
    }
	  if (sc1c3sCheckbox.checked) {
        const sc1c3sTextInputValue = sc1c3sTextInput.value;
        if (sc1c3sTextInputValue.trim() !== '') {
            text.push('\n');
            text.push(`3C’s confirmed - ${sc1c3sTextInputValue}`);
        } else {
            text.push('\n');
            text.push('3C’s confirmed'); }}
	 
	 if (sc1colgateCheckbox.checked) {
        text.push('\n');
        text.push('Colgate 1.5% Hydrogen Peroxide Mouth rinse given.'); }
	  if (sc1medicalHxCheckbox.checked) {
        text.push('\n');
        text.push(`Medical Hx ${sc1hxDropdown.value}`);
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
    
     
     // Oral surg body
     
    
 if (o1Checkbox3.checked) {
    const o1TextInput3Value = o1TextInput3.value;
    if (o1TextInput3Value.trim() !== '') {
        text.push('\n');
        text.push(`Tooth of interest: ${o1TextInput3Value}`);
        text.push('\n');
    } else {
        text.push('');
    }
}

if (o1Checkbox3A.checked) {
    const o1TextInput3AValue = o1TextInput3A.value;
    if (o1TextInput3AValue.trim() !== '') {
        text.push('\n');
        text.push(`RADIOGRAPHIC FINDINGS ${o1TextInput3AValue}`);
        text.push('\n');
    } else {
        text.push('');
    }
}
     
if (o1Checkbox4.checked) {
    const o1TextInput4Value = o1TextInput4.value;
    if (o1TextInput4Value.trim() !== '') {
        text.push('\n');
        text.push(`CLINICAL EXAMINATION ${o1TextInput4Value}`);
        text.push('\n');
    } else {
        text.push('');
    }
}
     
     
     
if (o1Checkbox5.checked) {
    text.push('\n');
    text.push(`Pt informed of the risks & complications of the procedure including damage to soft tissue, adjacent teeth, infection, bleeding, swelling, dry socket, numbness & pain. Tooth replacement options discussed & pt understood.`);
    text.push('\n');
}
if (OA11Checkbox.checked) {
    text.push('\n\n');
     text.push(`${OA11Dropdown.value}`);
}



if (OA12Checkbox.checked) {
    text.push('\n');
    text.push('Anesthetic Used');
	text.push(`: ${OA12Dropdown.value} VIA ${OA12InfilDropdown.value}`);
}
     
     



if (o1Checkbox6.checked) {
    text.push('\n');
    text.push(`Luxators, elevators, forceps used to decuff & deliver the tooth.`);
    text.push('\n');
}

if (o1Checkbox7.checked) {
    text.push('\n');
    text.push(`Tooth & socket inspected for fragments. Nil root fragments. Socket compressed immediately.`);
    text.push('\n');
}

if (o1Checkbox8.checked) {
    text.push('\n');
    text.push(`Haemostasis achieved (HA) w/ gauze OR simple interrupted suture w/ 3-0 VR with Gelfoam.`);
    text.push('\n');
}

if (o1Checkbox8A.checked) {
    text.push('\n\n');
    text.push(`REMAINING TX PLAN`);
    text.push('\n');
}




if (o1Checkbox10.checked) {
    text.push('\n');
    text.push(`POIG (regarding numbness, pain, swelling, bleeding, infection) & gauze packs w/ instruction on usage provided.`);
    text.push('\n');
}

     
     
     
     //Crown Consult 
     
    

if (J1Checkbox.checked) {
    const J1TextInputValue = J1TextInput.value;
    if (J1TextInputValue.trim() !== '') {
        text.push('\n\n');
          text.push(' DENTAL & SOCIAL HX ');
            text.push('\n');
        text.push(`Brushing freq, TB & TP: ${J1TextInputValue}`);
    } else {
        text.push('');
    }
}

// Checkbox J2
if (J2Checkbox.checked) {
    const J2TextInputValue = J2TextInput.value;
    if (J2TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Interdental cleaning/mouthwash: ${J2TextInputValue}`);
    } else {
        text.push('');
    }
}

// Checkbox J3
if (J3Checkbox.checked) {
    const J3TextInputValue = J3TextInput.value;
    if (J3TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Tobacco or alcohol consumption: ${J3TextInputValue}`);
    } else {
        text.push('');
    }
}

// Checkbox J4
if (J4Checkbox.checked) {
    const J4TextInputValue = J4TextInput.value;
    if (J4TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Snacks/sugary drinks (freq. & timing): ${J4TextInputValue}`);
    } else {
        text.push('');
    }
}

// Checkbox J5
if (J5Checkbox.checked) {
    const J5TextInputValue = J5TextInput.value;
    if (J5TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Risk factors related to occupation/interests: ${J5TextInputValue}`);
    } else {
        text.push('');
    }
}
// PATIENT EXPECTATION
if (J6Checkbox.checked) {
       text.push('\n\n');
    text.push(' PATIENT EXPECTATION:  ' + document.getElementById('J6Dropdown').value + ' ' + document.getElementById('J6TextInput').value);
  
}

// AESTHETIC EVALUATION


// J7
if (J7Checkbox.checked) {
    text.push('Smile line exposing cervical area of teeth: ' + document.getElementById('J7Dropdown').value);
    text.push('\n');
}

// J8
if (J8Checkbox.checked) {
    text.push('Incisal plane canting (slant): ' + document.getElementById('J8Dropdown').value);
    text.push('\n\n');
}

// I/O EXAMINATION


// J9

// J10
if (J10Checkbox.checked) {
    text.push('Furcation involvement: ' + document.getElementById('J10Dropdown').value);
    text.push('\n');
}

// J11
if (J11Checkbox.checked) {
    text.push('Working side contacts: ' + document.getElementById('J11Dropdown').value + ' ' + document.getElementById('J11TextInput').value);
    text.push('\n');
}

// J12
if (J12Checkbox.checked) {
    text.push('Anterior guidance: ' + document.getElementById('J12Dropdown').value + ' ' + document.getElementById('J12TextInput').value);
    text.push('\n');
}

// J13
if (J13Checkbox.checked) {
    text.push('Parafuction: ' + document.getElementById('J13Dropdown').value + ' ' + document.getElementById('J13TextInput').value);
    text.push('\n');
}

// J14
if (J14Checkbox.checked) {
    text.push('Opposing teeth: ' + document.getElementById('J14Dropdown').value + ' ' + document.getElementById('J14TextInput').value);
    text.push('\n');
}

// J15
if (J15Checkbox.checked) {
    text.push('OVD: ' + document.getElementById('J15Dropdown').value + ' ' + document.getElementById('J15TextInput').value);
    text.push('\n\n');
}

// J16, J17


// J18 - J25

if (J21Checkbox.checked) {
    text.push('Ferrule height: ' + document.getElementById('J21TextInput').value);
    text.push('\n');
}




if (J23Checkbox.checked) {
    text.push('Radiographic findings: ' + document.getElementById('J23TextInput').value);
    text.push('\n');
}

if (J24Checkbox.checked) {
    text.push('Pulp vitality (cold/ EPT): ' + document.getElementById('J24TextInput').value);
    text.push('\n');
}

if (J25Checkbox.checked) {
    text.push('Dx: ' + document.getElementById('J25TextInput').value);
    text.push('\n\n');
}



if (J34BCheckbox.checked) {
    text.push('Patient informed that tooth ___ has compromised tooth structure & requires protective measure from occluding forces. Warned risk of further fracturing, bacterial leakage requiring RCT & risk of complete fracture warranting extraction. Advised that direct restoration may be inadequate to withstand cusps & that cuspal coverage (in the form of crown, onlay or overlay depending on the extent of defect) may be ideal. Explained the multiple visits involved & what happens at each stage. Pt understood & happy to move forward with tx. Informed consent obtained.');
    text.push('\n');
}






// J38 - J43
if (J38Checkbox.checked) {
    text.push('Coverage: ' + document.getElementById('J38Dropdown').value);
    text.push('\n');
}

if (J39Checkbox.checked) {
    text.push('Material: ' + document.getElementById('J39Dropdown').value);
    text.push('\n');
}

if (J40Checkbox.checked) {
    text.push('FDP: ' + document.getElementById('J40Dropdown').value);
    text.push('\n');
}

if (J41Checkbox.checked) {
    text.push('Pontic design: ' + document.getElementById('J41Dropdown').value);
    text.push('\n');
}

if (J43Checkbox.checked) {
    text.push('Occlusal surface material: ' + document.getElementById('J43Dropdown').value);
  
}


// J44
if (J44Checkbox.checked) {
        text.push('\n\n');
    text.push('Max & mand alginate primary impression taken. Impression checked for quality, sterilized & bagged. Lab card with instructions for construction of diagnostic models & custom tray for PVS impression of tooth ___ written, scanned & sent to the lab.');
   
}

// The 'text' array now contains the generated text based on the checked checkboxes and input values

     
     
     // Crown Prep 
     // 
// J50
if (J50Checkbox.checked) {
    text.push('\n\n');
    text.push(' LAB WORK ');
    text.push('\n\n');
}

// J51
if (J51Checkbox.checked) {
    text.push('Study model poured up & special tray fabricated.');
    text.push('\n\n');
}

// J52
if (J52Checkbox.checked) {
    text.push('Diagnostic wax up done & putty keys made.');
    text.push('\n\n');
}

// J53
if (J53Checkbox.checked) {
    text.push('Crown material chosen: ' + document.getElementById('J53Dropdown').value);
    text.push('\n');
}

// J54
if (J54Checkbox.checked) {
    text.push('Shade selected: ' + document.getElementById('J54ATextInput').value + ' VITA 3D Master (for PFM) / ' + document.getElementById('J54BTextInput').value + ' VITA Classic');
    text.push('\n\n');
}





if (J60Checkbox.checked) {
    text.push('All existing restorative materials removed. NIL pulp exposure. Foundation restoration required/ not required to establish resistance form / block out undercuts.');
    text.push('\n\n');
}


if (J61Checkbox.checked) {
    text.push('Crown preparation completed using H/S & refined-polished using S/S coarse soflex disc.');
    text.push('\n\n');
}

// J62
if (J62Checkbox.checked) {
    text.push('Gingival retraction is achieved using retraction cord.');
    text.push('\n');
}

// J63
if (J63Checkbox.checked) {
    text.push('Vaseline was used to lubricate the completed crown preparation & adjacent structures.');
    text.push('\n\n');
}

// J64
if (J64Checkbox.checked) {
    text.push('Provisional restoration is constructed using Structure 2 (flowable composite used to refine deficient margins) & finished & polish using H/S & S/S.');
    text.push('\n');
}

// J65
if (J65Checkbox.checked) {
    text.push('Interproximal contact checked w/ floss. Occlusion checked w/ articulating paper & adjusted accordingly.');
    text.push('\n');
}

// J66
if (J66Checkbox.checked) {
    text.push('Crown preparation surface is cleaned thoroughly using Endodry & provisional restoration is cemented using Temp-Bond NE. Excess cement is removed using probe & floss.');
    text.push('\n\n');
}

// REMAINING TX PLAN


// J67
if (J67Checkbox.checked) {
        text.push('REMAINING TX PLAN');
     text.push('\n');
    text.push('Secondary impression');
    text.push('\n');
}

// J68
if (J68Checkbox.checked) {
    text.push('Crown insertion');
    text.push('\n\n');
}

// POST OP


// J69
if (J69Checkbox.checked) {
    text.push('POIG. Tooth may be sensitive for the next few days after tx (recommend Panadol/Nurofen if necessary); Cautioned against consuming hot food/drinks until the LA wears off due to numb lip & cheek/lip biting.');
    text.push('\n\n');
}

// The 'text' array now contains the generated text based on the checked checkboxes

     
     
     
     
  //Crown Impression Body
     // Assuming you have a 'text' array to store the results

// J80
if (J80Checkbox.checked) {
    text.push('\n');
    text.push('Existing temporary crown restoration removed using flat plastic &/or spoon excavator. Existing cement materials removed using U/S at low frequency.');
}

// J81
if (J81Checkbox.checked) {
    text.push('\n\n');
    text.push('Gingival retraction achieved using two-cord technique with Ultrapak #0 cord followed by Ultrapk #1 cord (infil with articaine w/ adrenaline to reduce bleeding if retraction cord w/ hemodent is insufficient)');
}

// J82
if (J82Checkbox.checked) {
    text.push('\n\n');
    text.push('Crown preparation margins refined using H/S.');
}

// J83
if (J83Checkbox.checked) {
    text.push('\n');
    text.push('Crown prep surface was ensured moisture-free with Endodry using cotton pellets');
}

// J84
if (J84Checkbox.checked) {
    text.push('\n\n');
    text.push('Crown impression taken with one-step impression technique using light body & heavy body PVS.');
}

// J85
if (J85Checkbox.checked) {
    text.push('\n\n');
    text.push('Secondary impression checked for quality, sterilized & bagged. Lab card with instructions for construction of model & fixed prosthesis in selected shade written, scanned & sent to the lab.');
}

// J86
if (J86Checkbox.checked) {
    text.push('\n\n');
    text.push('Temporary crown recemented. Margins assessed.');
}

// J87
if (J87Checkbox.checked) {
    text.push('\n\n');
    text.push(' REMAINING TX PLAN ');
    text.push('\n');
    text.push('Crown insertion');
}

// J88
if (J88Checkbox.checked) {
    text.push('\n\n');
    text.push(' POST OP ');
    text.push('\n');
    text.push('POIG. Tooth may be sensitive for the next few days after tx (recommend Panadol/Nurofen if necessary); Cautioned against consuming hot food/drinks until the LA wears off due to numb lip & cheek/lip biting.');
}

// The 'text' array now contains the generated text based on the checked checkboxes

     
     
     
     
		// Crown Insert Body
     // Assuming you have a 'text' array to store the results

// J93
if (J93Checkbox.checked) {
    text.push('\n');
    text.push(' TX DELIVERED ');
}

// J94
if (J99Checkbox.checked) {
    text.push('\n');
    text.push('Existing temporary crown restoration removed using spoon excavator. Existing cement materials removed using U/S at low frequency & use of pumice on S/S.');
}

// J100
if (J100Checkbox.checked) {
    text.push('\n');
    text.push('Gingival retraction achieved using retraction cord.');
}

// J101
if (J101Checkbox.checked) {
    text.push('\n\n');
    text.push('Fixed prosthesis trial seated & assessed for marginal adaptation using sickle probe, interproximal contacts using floss, MIP using Shimstock, lateral/protrusive slide patterns, shade & shape.');
}

// J102
if (J102Checkbox.checked) {
    text.push('\n\n');
    text.push('Tooth preparation was cleaned using prophy with a mixture of flour pumice & water.');
}

// J103
if (J103Checkbox.checked) {
    text.push('\n\n');
    text.push('Fixed prosthesis is cemented using resin-modified GIC (capsulated GC Fuji Plus) & held in place while excess cement is removed at the rubbery stage.');
}

// J104
if (J104Checkbox.checked) {
    text.push('\n');
    text.push('Isolation is maintained for at least 5mins to allow complete set before rinse.');
}

// J105
if (J105Checkbox.checked) {
    text.push('\n\n');
    text.push('Occlusion post-insertion is reassessed with the patient in the upright position.');
}

// J106
if (J106Checkbox.checked) {
    text.push('\n\n');
    text.push(' REMAINING TX PLAN ');
    text.push('\n');
    text.push('Fixed prosthesis review in 4/52.');
}

// J107
if (J107Checkbox.checked) {
    text.push('\n\n');
    text.push(' POST OP ');
    text.push('\n');
    text.push('POIG. Tooth may be sensitive for the next few days & while already adjusted for, minor discrepancy may still be felt but should resolve over the next few days. Gums may be a bit tender but cont. to brush gently using a soft TB; Rinsing w/ warm saltwater may help to reduce pain. Recommended Panadol/Nurofen if necessary. Reinforced care for fixed prosthesis i.e. OHI & encourage 6-monthly maintenance. Cautioned against consuming hot food/drinks until the LA wears off due to numb lip & lip biting.');
}

// The 'text' array now contains the generated text based on the checked checkboxes

     	  
	   
     
     
     
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
			text.push('\n');}
	 
	
	 if (E2Checkbox.checked) {

			 text.push('\n\n');
            text.push(`PA radiograph taken. RADIOGRAPHIC EXAMINATION`);;
			 } 
	  
	 if (E3Checkbox.checked) {
			 const E3TextInputValue = E3TextInput.value;
        if (E3TextInputValue.trim() !== '') {
             text.push('\n'); 
			text.push('Carious w/wo exposure ');
			text.push(`${E3TextInputValue}`);
			
        } else {
			text.push('');  
       
    }
}
	 if (E4Checkbox.checked) {
			 const E4TextInputValue = E4TextInput.value;
        if (E4TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Restored ');
			text.push(`${E4TextInputValue}`);
			
        } else {
			text.push('');  
       
    }
}
	   if (E5Checkbox.checked) {
			 const E5TextInputValue = E5TextInput.value;
        if (E5TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Pulp capping ');
			text.push(`${E5TextInputValue}`);
			
        } else {
		text.push('');  
    }
}
	 
	   if (E7Checkbox.checked) {
			 const E7TextInputValue = E7TextInput.value;
        if (E7TextInputValue.trim() !== '') {
            text.push('\n'); 
			text.push('Hx of trauma ');
			text.push(`${E7TextInputValue}`);
			
        } else {
			text.push('');  
       
    }
}
	 
	  if (E8Checkbox.checked) {
			 const E8TextInputValue = E8TextInput.value;
        if (E8TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Previous pulpotomy ');
			text.push(`${E8TextInputValue}`);
			
        } else {
			text.push('');  
       
    }
}
	   if (E9Checkbox.checked) {
			 const E9TextInputValue = E9TextInput.value;
        if (E9TextInputValue.trim() !== '') {
              text.push('\n'); 
			text.push('Previously root treated ');
			text.push(`${E9TextInputValue}`);
			
        } else {
			text.push('');  
       
    }
}
	 
if (E10Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`PULP SENSIBILITY TESTS performed.`);}
	 
     
  if (E11Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
       const E11BTextInputValue = E11BTextInput.value;
        const E11CTextInputValue = E11CTextInput.value;
       if (E11BTextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`Cold:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E11Dropdown.value}`);
      	text.push(`, ${E11BTextInputValue}`);
      	 text.push(` ${E11BDropdown.value}`);
			} 
      else {     text.push('\n'); 
			 text.push(`Cold:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E11Dropdown.value}`);
      	
			} 
      if (E11CTextInputValue.trim() !== '') {
          text.push(`, ${E11CTextInputValue}`);
      	 text.push(` ${E11CDropdown.value}`);
			} 
      else {     text.push(''); 
			
      	
			} }
     
		
	  if (E12Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
       const E11BTextInputValue = E11BTextInput.value;
        const E11CTextInputValue = E11CTextInput.value;
       if (E11BTextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`EPT:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E12Dropdown.value}`);
      	text.push(`, ${E11BTextInputValue}`);
      	 text.push(` ${E12BDropdown.value}`);
			} 
      else {     text.push('\n'); 
			 text.push(`EPT:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E12Dropdown.value}`);
      	
			} 
      if (E11CTextInputValue.trim() !== '') {
          text.push(`, ${E11CTextInputValue}`);
      	 text.push(` ${E12CDropdown.value}`);
			} 
      else {     text.push(''); 
			
      	
			} }
	 
	  if (E13Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
       const E11BTextInputValue = E11BTextInput.value;
        const E11CTextInputValue = E11CTextInput.value;
       if (E11BTextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`Palpation:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E13Dropdown.value}`);
      	text.push(`, ${E11BTextInputValue}`);
      	 text.push(` ${E13BDropdown.value}`);
			} 
      else {     text.push('\n'); 
			 text.push(`Palpation:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E13Dropdown.value}`);
      	
			} 
      if (E11CTextInputValue.trim() !== '') {
          text.push(`, ${E11CTextInputValue}`);
      	 text.push(` ${E13CDropdown.value}`);
			} 
      else {     text.push(''); 
			
      	
			} }
	 
	 if (E15Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
       const E11BTextInputValue = E11BTextInput.value;
        const E11CTextInputValue = E11CTextInput.value;
       if (E11BTextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`Percussion:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E15Dropdown.value}`);
      	text.push(`, ${E11BTextInputValue}`);
      	 text.push(` ${E15BDropdown.value}`);
			} 
      else {     text.push('\n'); 
			 text.push(`Percussion:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E15Dropdown.value}`);
      	
			} 
      if (E11CTextInputValue.trim() !== '') {
          text.push(`, ${E11CTextInputValue}`);
      	 text.push(` ${E15CDropdown.value}`);
			} 
      else {     text.push(''); 
			
      	
			} }
     
     
	  if (E16Checkbox.checked) {
			 const E11TextInputValue = E11TextInput.value;
       const E11BTextInputValue = E11BTextInput.value;
        const E11CTextInputValue = E11CTextInput.value;
       if (E11BTextInputValue.trim() !== '') {
             text.push('\n'); 
			 text.push(`Mobility:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E16Dropdown.value}`);
      	text.push(`, ${E11BTextInputValue}`);
      	 text.push(` ${E16BDropdown.value}`);
			} 
      else {     text.push('\n'); 
			 text.push(`Mobility:`);
			text.push(` ${E11TextInputValue}`);
      	 text.push(` ${E16Dropdown.value}`);
      	
			} 
      if (E11CTextInputValue.trim() !== '') {
          text.push(`, ${E11CTextInputValue}`);
      	 text.push(` ${E16CDropdown.value}`);
			} 
      else {     text.push(''); 
			
      	
			} }
	 if (E17Checkbox.checked) {
			  const E17TextInputValue = E17TextInput.value;
          if (E17TextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Abnormal probing:');
              text.push(` ${E17TextInputValue}`);
			 }
            } else {
			text.push('');  
       
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
	 
	  if (E25Checkbox.checked) {
			  {
             text.push('\n'); 
			 text.push(`Bonded composite:${E25Dropdown.value}`);
			
			 }
}
	 
	   if (E26Checkbox.checked) {
			  {
             text.push('\n'); 
			 text.push(`Crown:${E26Dropdown.value}`);
			
			 }
}
	 
	 
	  if (E27Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt understood that the type of final restoration recommended after RCT will be determined by the amount of tooth structure remaining after removal of existing restoration & caries & that a post may be indicated to retain the core.`);
			;}
	 // Pulpotomy Body 
	 
	 
	 if (E40Checkbox.checked) {
    text.push('\n');
    text.push('Pt informed of the risks & complications of the procedure & an informed consent for tx was obtained.');
}

if (E41Checkbox.checked) {
    text.push('\n\n');
     text.push(`${E41Dropdown.value}`);
}



if (E42Checkbox.checked) {
    text.push('\n');
    text.push('Anesthetic Used');
	text.push(`: ${E42Dropdown.value} VIA ${E42InfilDropdown.value}`);
}



if (E43Checkbox.checked) {
    text.push('\n');
    text.push('Isolation');
	text.push(`: ${E43Dropdown.value}`);
}



if (E44Checkbox.checked) {
    text.push('\n\n');
    text.push('Cavity prepared using HS and SS, previous restoration removed/caries free. Exposed pulp reveals');
 text.push(`: ${E44Dropdown.value}`); }



if (E45Checkbox.checked) {
    text.push('\n\n');
    text.push('Pulp amputation was performed using S/S #8 large round bur. Canal orifice(s) were visually inspected to ensure complete removal of the pulp tissue.');
}

if (E46Checkbox.checked) {
    text.push('\n');
    text.push('Disinfection & hemostasis was achieved by compression of sterile cotton pellets soaked in 2% sodium hypochlorite over the pulp stump(s) using gentle pressure for 2-5mins.');
}

if (E47Checkbox.checked) {
    text.push('\n');
    text.push('Access cavity is temporized with calcium hydroxide paste, Cavit, & Fuji 7 GIC (pink)');
}

if (E48Checkbox.checked) {
    text.push('\n\n');
    text.push('Cusps lightly reduced to take tooth out of occlusion for symptomatic relief & decrease risk of cuspal fracture (discussed with pt prior to tx)');
}

	 
	 
// Endo Chemo body 
	 
	 
    if (E50Checkbox.checked) {
        text.push('\n');
        text.push('Advantages & disadvantages of each Tx option were discussed with patient, written information sheets provided.');
    }



    if (E51Checkbox.checked) {
        text.push('\n');
        text.push('The patient understood the advantages, risks, as well as the cost involved in RCT, including the need for multiple visits, and consented for RCT.');
    }



    if (E53Checkbox.checked) {
        text.push('\n\n');
           text.push('Post-endodontic restorative options discussed:');
           text.push('\n');
        text.push(`1) Bonded composite`);
    }


    if (E54Checkbox.checked) {
        text.push('\n');
        text.push(`2) Crown`);
    }


    if (E55Checkbox.checked) {
        text.push('\n\n');
        text.push('Pt understood that the type of final restoration recommended after RCT will be determined by the amount of tooth structure remaining after removal of existing restoration & caries & that a post may be indicated to retain the core.');
    }

    if (E56Checkbox.checked) {
        text.push('\n\n');
        text.push(`${E56Dropdown.value}`);
    }

    if (E57Checkbox.checked) {
        text.push('\n');
        text.push(`Anesthetic Used: ${E57Dropdown.value} VIA ${E57InfilDropdown.value}`);
    }

    if (E58Checkbox.checked) {
        text.push('\n');
        text.push(`${E58Dropdown.value}`);
    }

    if (E59Checkbox.checked) {
        text.push('\n\n');
        text.push('Cavity prepared using HS and SS, previous restoration removed/caries free.');
    }

    if (E60Checkbox.checked) {
        text.push('\n');
        text.push(`${E60Dropdown.value}`);
    }



   

    if (E62Checkbox.checked) {
        text.push('\n\n');
        text.push('Pre-endodontic provisional restoration completed using GIC/ composite/ bulk fill flowable composite.');
    }

    if (E63Checkbox.checked) {
        text.push('\n');
        text.push('Access cavity prepared using H/S & U/S.');
    }



    if (E64Checkbox.checked) {
        text.push('\n\n');
          text.push(`${E64Dropdown.value} `);
        text.push(`identified. XA Protaper was used to prepare the coronal 3rd of all canal(s)`);
    }

    if (E65Checkbox.checked) {
        text.push('\n');
        text.push('EWL estimated using pre-operative radiograph & apex locator. WL radiograph taken & CWL obtained.');
    }

    if (E66Checkbox.checked) {
        text.push('\n\n');
        text.push(`Proglider was used to prepare glide path in all canal(s). Canal(s) prepared up to Protaper ${E66ProtaperDropdown.value}, irrigated with 4% sodium hypochlorite & recapitulated with size 10 hand files after each instrumentation.`);
    }
     
         if (E67Checkbox.checked) {
        text.push('\n\n');
        text.push('Access cavity is temporized with Odontopaste/ calcium hydroxide paste, Cavit, & Fuji 7 GIC (pink)');
    }
     
         if (E68Checkbox.checked) {
        text.push('\n');
        text.push('Cusps lightly reduced to take tooth out of occlusion for symptomatic relief & decrease risk of cuspal fracture (discussed with pt prior to tx)');
    }
	 
     
     
			  const E69ATextInputValue = E69ATextInput.value;
          if (E69ATextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Canal:');
              text.push(` ${E69ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
     	  const E70ATextInputValue = E70ATextInput.value;
          if (E70ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Ref point:');
              text.push(` ${E70ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
       const E71ATextInputValue = E71ATextInput.value;
          if (E71ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('EWL:');
              text.push(` ${E71ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
        const E72ATextInputValue = E72ATextInput.value;
          if (E72ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('WLF Size:');
              text.push(` ${E72ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E73ATextInputValue = E73ATextInput.value;
          if (E73ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('CWL:');
              text.push(` ${E73ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E74ATextInputValue = E74ATextInput.value;
          if (E74ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Last rotary used:');
              text.push(` ${E74ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E75ATextInputValue = E75ATextInput.value;
          if (E75ATextInputValue.trim() !== '') {
             text.push('\n');
			text.push('(MC):');
              text.push(` ${E75ATextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
	 
     const E69BTextInputValue = E69BTextInput.value;
          if (E69BTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Canal:');
              text.push(` ${E69BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
     	  const E70BTextInputValue = E70BTextInput.value;
          if (E70BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Ref point:');
              text.push(` ${E70BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
       const E71BTextInputValue = E71BTextInput.value;
          if (E71BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('EWL:');
              text.push(` ${E71BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
        const E72BTextInputValue = E72BTextInput.value;
          if (E72BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('WLF Size:');
              text.push(` ${E72BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E73BTextInputValue = E73BTextInput.value;
          if (E73BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('CWL:');
              text.push(` ${E73BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E74BTextInputValue = E74BTextInput.value;
          if (E74BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Last rotary used:');
              text.push(` ${E74BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E75BTextInputValue = E75BTextInput.value;
          if (E75BTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('(MC):');
              text.push(` ${E75BTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
     
       const E69CTextInputValue = E69CTextInput.value;
          if (E69CTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Canal:');
              text.push(` ${E69CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
     	  const E70CTextInputValue = E70CTextInput.value;
          if (E70CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Ref point:');
              text.push(` ${E70CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
       const E71CTextInputValue = E71CTextInput.value;
          if (E71CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('EWL:');
              text.push(` ${E71CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
        const E72CTextInputValue = E72CTextInput.value;
          if (E72CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('WLF Size:');
              text.push(` ${E72CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E73CTextInputValue = E73CTextInput.value;
          if (E73CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('CWL:');
              text.push(` ${E73CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E74CTextInputValue = E74CTextInput.value;
          if (E74CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Last rotary used:');
              text.push(` ${E74CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E75CTextInputValue = E75CTextInput.value;
          if (E75CTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('(MC):');
              text.push(` ${E75CTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
      const E69DTextInputValue = E69DTextInput.value;
          if (E69DTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push('Canal:');
              text.push(` ${E69DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
     	  const E70DTextInputValue = E70DTextInput.value;
          if (E70DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Ref point:');
              text.push(` ${E70DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
       const E71DTextInputValue = E71DTextInput.value;
          if (E71DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('EWL:');
              text.push(` ${E71DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
        const E72DTextInputValue = E72DTextInput.value;
          if (E72DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('WLF Size:');
              text.push(` ${E72DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E73DTextInputValue = E73DTextInput.value;
          if (E73DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('CWL:');
              text.push(` ${E73DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E74DTextInputValue = E74DTextInput.value;
          if (E74DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Last rotary used:');
              text.push(` ${E74DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
     
         const E75DTextInputValue = E75DTextInput.value;
          if (E75DTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('(MC):');
              text.push(` ${E75DTextInputValue}`);
			 }
             else {
			text.push('');  
       
    }
       
	 // Obturation Body
	
   
 

  
	   if (E80Checkbox.checked) {
        text.push('\n');
        text.push(`${E81Dropdown.value}`);
    }

   
	 if (E82Checkbox.checked) {
        text.push('\n');
        text.push(`Anesthetic Used: ${E82Dropdown.value} VIA ${E82InfilDropdown.value}`);
    }

  

    if (E83Checkbox.checked) {
        text.push('\n');
        text.push(`Isolation: ${E84Dropdown.value}`);
    } 
	 
	 
	 
	 
	 
    if (E85Checkbox.checked) {
        text.push('\n\n');
        text.push('Temporary restorations removed using H/S & U/S.');
    }

    if (E86Checkbox.checked) {
        text.push('\n');
        text.push('Canal(s) were irrigated with 4% sodium hypochlorite & recapitulated to prepared lengths to ensure patency.');
    }

    if (E87Checkbox.checked) {
       text.push('\n\n');
        text.push('Master cone tried & tug-back achieved. Master cone radiograph taken.');
    }

    if (E88Checkbox.checked) {
        text.push('\n');
        text.push('All canal(s) were dried with length-controlled paper points.');
    }

    if (E89Checkbox.checked) {
        text.push('\n');
        text.push('All canal(s) were obturated with master cones & medium fine accessory GP points using AH Plus sealer & lateral condensation technique.');
    }

    if (E90Checkbox.checked) {
        text.push('\n\n');
        text.push('Excess GP were removed using Super endo up to 4mm below each canal orifice (to reduce risk of staining & allow sufficient space for Cavit placement) & the remaining GP were packed with a plugger.');
    }

    if (E91Checkbox.checked) {
      text.push('\n\n');
        text.push('Excess GP & sealer on the coronal portion of each orifice were removed with Gates Glidden at 10,000 RPM & 5s etch, respectively.');
    }

    if (E92Checkbox.checked) {
        text.push('\n\n');
        text.push('Final PA radiograph taken.');
    }

    if (E93Checkbox.checked) {
       text.push('\n\n');
        text.push('Final restoration was placed using composite / Access cavity is temporized with Cavit, & Fuji 9 GIC.');
    }

    if (E94Checkbox.checked) {
        text.push('\n\n');
        text.push('POIG. Tooth may be sensitive for the next few days post-op (recommend ibuprofen 600mg &/or paracetamol if necessary); Cautioned against consuming hot food/drinks until the LA wears off due to numb lip & cheek/lip biting.');
    }

    if (E95Checkbox.checked) {
      text.push('\n\n');
        text.push('Informed pt about future treatment appointments, such as the restoration & recall appointments.');
    }

// Perio body
      if (P1ACheckbox.checked) {
        text.push('\n\n');
        text.push('Dental Hx');
    }
     if (P1Checkbox.checked) {
    const P1TextInputValue = P1TextInput.value;
    if (P1TextInputValue.trim() !== '') {
          text.push('\n')
        text.push(`Brushing freq, TB & TP: ${P1TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P2Checkbox.checked) {
    const P2TextInputValue = P2TextInput.value;
    if (P2TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Interdental cleaning/mouthwash: ${P2TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P3Checkbox.checked) {
    const P3TextInputValue = P3TextInput.value;
    if (P3TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Pain Hx: ${P3TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P4Checkbox.checked) {
    const P4TextInputValue = P4TextInput.value;
    if (P4TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Bleeding gums: ${P4TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P5Checkbox.checked) {
    const P5TextInputValue = P5TextInput.value;
    if (P5TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Missing teeth & reason: ${P5TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P6Checkbox.checked) {
    const P6TextInputValue = P6TextInput.value;
    if (P6TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Tooth mobility or movement: ${P6TextInputValue}`);
    } else {
        text.push('');
    }
}
    // DENTAL Hx (Continued)
     
         if (P1BCheckbox.checked) {
        text.push('\n\n');
        text.push('SOCIAL & FAMILY HX');
    }
if (P7Checkbox.checked) {
    const P7TextInputValue = P7TextInput.value;
    if (P7TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Snacks/sugary drinks: ${P7TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P8Checkbox.checked) {
    const P8aTextInputValue = P8aTextInput.value;
    if (P8aTextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Smoking Hx: ${P8aTextInputValue}`);
    } else {
        text.push('');
    }
}

if (P9Checkbox.checked) {
    const P9TextInputValue = P9TextInput.value;
    if (P9TextInputValue.trim() !== '') {
        text.push('\n');
        text.push(`Family Hx of diabetes/gum disease/tooth loss: ${P9TextInputValue}`);
    } else {
        text.push('');
    }
}

if (P10Checkbox.checked) {
     text.push('\n\n');
    text.push('Full perio charted. Significant findings:');
         text.push('\n');
}


     
     
 
    if (P101Checkbox.checked) {
         text.push('\n');
         text.push('Severity');
        text.push('\n');
        text.push(`Interdental CAL at site of greatest loss: 1 – 2 mm`);
   
}
    
       if (P102Checkbox.checked) {
            text.push('\n');
             text.push('Severity');
        text.push('\n');
        text.push(`Interdental CAL at site of greatest loss: 3 – 4 mm`);
   
    }

                           
    if (P103Checkbox.checked) {
         text.push('\n');
          text.push('Severity');
        text.push('\n');
        text.push(`Interdental CAL at site of greatest loss: ≥ 5mm`);
    
    }

   if (P104Checkbox.checked) {
        text.push('\n');
         text.push('Severity');
        text.push('\n');
        text.push(`Interdental CAL at site of greatest loss: ≥ 5mm`);

}
     
        if (P105Checkbox.checked) {
        text.push('\n');
        text.push(`RBL: Coronal Third (< 15%) `);

}
     
     
           if (P106Checkbox.checked) {
               
        text.push('\n');
        text.push(`RBL: Coronal Third (15 – 33 %)`);

}
     
           if (P107Checkbox.checked) {
        text.push('\n');
        text.push(`RBL:  Extending to the mid third of the root and beyond.`);

}
     
           if (P108Checkbox.checked) {
        text.push('\n');
        text.push(`RBL: Extending to the mid third of the root and beyond.`);

}
         if (P109Checkbox.checked) {
        text.push('\n');
        text.push(`Periodontitis-associated tooth loss: Nil `);

}
     
              if (P110Checkbox.checked) {
        text.push('\n');
        text.push(`Periodontitis-associated tooth loss:  ≤ 4 teeth `);

}
     
     
              if (P111Checkbox.checked) {
        text.push('\n');
        text.push(`Periodontitis-associated tooth loss: ≥ 5 teeth. `);

}
     
       

     
     
if (P14Checkbox.checked) {
    const P14DropdownValue = P14Dropdown.value;
    if (P14DropdownValue.trim() !== '') {
        text.push('\n\n');
        text.push('Complexity');   
        text.push('\n');
        text.push(`Max PPD: ${P14DropdownValue}`);
    } else {
        text.push('');
    }
}
// P15
if (P15Checkbox.checked) {
    const P15DropdownValue = P15Dropdown.value;
    if (P15DropdownValue.trim() !== '') {
          text.push('\n');
        text.push(`RBL pattern: ${P15DropdownValue}`);
    } else {
        text.push('');
    }
}

// P16
if (P16Checkbox.checked) {
    const P16DropdownValue = P16Dropdown.value;
    if (P16DropdownValue.trim() !== '') {
           text.push('\n');
        text.push(`Furcation involvement: ${P16DropdownValue}`);
    } else {
        text.push('');
    }
}

// P17
if (P17Checkbox.checked) {
    const P17DropdownValue = P17Dropdown.value;
    if (P17DropdownValue.trim() !== '') {
           text.push('\n');
        text.push(`Ridge defects: ${P17DropdownValue}`);
    } else {
        text.push('');
    }
}

// P18
if (P18Checkbox.checked) {
    const P18TextInputValue = P18TextInput.value;
    if (P18TextInputValue.trim() !== '') {
          text.push('\n');
        text.push(`Addition (Stage IV): ${P18TextInputValue}`);
    } else {
        text.push('');
    }
}

// Extent & Distribution (Continued)

if (P19Checkbox.checked) {
    const P19DropdownValue = P19Dropdown.value;
        text.push('\n\n');

        text.push(`Extent & Distribution: ${P19DropdownValue}`);
    
}
// Grading (Continued)


     if (P116Checkbox.checked) {
        text.push('\n\n');
          text.push('Grade Modifiers');
          text.push('\n');
         
        text.push(`Evidence of loss (RBL/CAL) over 5yrs: Evidence of no loss over 5 years. `); }
     
     
      if (P117Checkbox.checked) {
        text.push('\n\n');
        text.push(`Evidence of loss (RBL/CAL) over 5yrs: <2mm over 5 years.`); }
     
      if (P118Checkbox.checked) {
        text.push('\n\n');
        text.push(`Evidence of loss (RBL/CAL) over 5yrs: > 2mm over 5 years. `); }
     
     
          if (P119Checkbox.checked) {
         text.push('\n');
        text.push(`%RBL/age: <0.25 `); }
     
         if (P120Checkbox.checked) {
       text.push('\n');
        text.push(`%RBL/age: 0.25 – 1.0`); }
     
     
         if (P121Checkbox.checked) {
     text.push('\n');
        text.push(`%RBL/age: &gt;1.0 `); }
     
     
              if (P122Checkbox.checked) {
       text.push('\n');
        text.push(`Case Phenotype: Heavy biofilm deposits with low levels of destruction. `); }
     
              if (P123Checkbox.checked) {
        text.push('\n');
        text.push(`Case Phenotype: Destruction commensurate with biofilm deposits. `); }
     
              if (P124Checkbox.checked) {
     text.push('\n');
        text.push(`Case Phenotype: Destruction disproportionate to biofilm deposits; evidence of periods of rapid progression and/or early-onset disease (molar/incisor pattern); expected poor response to standard bacterial control. `); }
     
      if (P125Checkbox.checked) {
        text.push('\n\n');
          text.push('GRADE MODIFIERS');
              text.push('\n');
        text.push(`Non-smoker`); }
     
     if (P126Checkbox.checked) {
        text.push('\n\n');
           text.push('GRADE MODIFIERS');
             text.push('\n');
        text.push(`Smoker < 10 cigarettes/day `); }
     if (P127Checkbox.checked) {
        text.push('\n\n');
           text.push('GRADE MODIFIERS');
             text.push('\n');
        text.push(`Smoker >10 cigarettes/day`); }
     
     if (P128Checkbox.checked) {
        text.push('\n');
        text.push(`Diabetes: Normoglycemic / no diagnosis of Diabetes `); }
     
        if (P129Checkbox.checked) {
        text.push('\n');
        text.push(`Diabetes: HbA1c < 7.0% in a Diabetes Patient `); }
     
        if (P130Checkbox.checked) {
        text.push('\n');
        text.push(`Diabetes: HbA1c > 7.0 % in a Diabetes Patient `); }
     
     if (P25Checkbox.checked) {
        const P25ADropdownValue = P25ADropdown.value;
        const P25BDropdownValue = P25BDropdown.value;
         const P19BDropdownValue = P19BDropdown.value;
        text.push('\n\n');
     text.push('Dx');
        text.push('\n');
        text.push(`${P25ADropdownValue} `);
    text.push(`${P19BDropdownValue}, `);
        text.push(`Grade ${P25BDropdownValue} periodontitis`);
          
    

}
     
     
     
if (p40Checkbox5.checked) {
    text.push('\n\n');
    text.push('U/S & hand scaling (Gracey curettes) used to debride all sub- & supra-gingival surfaces. All calculus & plaque removed.');
}

// Checkbox 6
if (p40Checkbox6.checked) {
    text.push('\n');
    text.push('Prophy paste used to clean & polish all supragingival surfaces. Floss confirmed removal of calculus on interproximal surfaces.');
}

// Checkbox 7
if (p40Checkbox7.checked) {
    text.push('\n\n');
    text.push('OHI reinforced to patient.');
}

// REMAINING p40 PLAN


// Checkbox 8
if (p40Checkbox8.checked) {
    text.push('\n\nREMAINING Tx plan ');
    text.push('\n');
    text.push('250 x2 Active non-surgical perio tx Q2 & Q3 w LA.');
}

// Checkbox 9
if (p40Checkbox9.checked) {
    text.push('\n');
    text.push('251 Supportive periodontal therapy/review.');
}

// POST p40


// Checkbox 10
if (p40Checkbox10.checked) {
    text.push('\n\nPOST OP');
    text.push('\n');
    text.push('POIG regarding bleeding, sensitivity & gap formation (if any).');
}
     
     
     
     


	 //F/F Primary Body
	 
	 
    
     if (G1Checkbox.checked) {
			 const G1TextInputValue = G1TextInput.value;
        if (G1TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Reason for tooth loss (years of edentulous): ${G1TextInputValue}`);
			
        } else {
			 text.push(''); }}

		    if (G2Checkbox.checked) {
			 const G2TextInputValue = G2TextInput.value;
        if (G2TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Patient’s responsibility in home care: ${G2TextInputValue}`);
			
        } else {
			 text.push('');  
          }
}
		    if (G3Checkbox.checked) {
			 const G3TextInputValue = G3TextInput.value;
        if (G3TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Hx & preference of existing & previous denture: ${G3TextInputValue}`);
			
        } else {
			 text.push('');  
         
       
    }
}
		    if (G4Checkbox.checked) {
			 const G4TextInputValue = G4TextInput.value;
        if (G4TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Evaluation of existing denture: ${G4TextInputValue}`);
			
        } else {
			 text.push('');  
       
    }
}
		  if (G5Checkbox.checked) {
			 const G5aTextInputValue = G5aTextInput.value;
			  const G5bTextInputValue = G5bTextInput.value;
			  const G5cTextInputValue = G5cTextInput.value;
        if (G5aTextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Smoking Hx: ${G5aTextInputValue} a day, since ${G5bTextInputValue}, ${G5cTextInputValue} intention of quiting `);
        } else {
			 text.push('');  
           
           }
}		
		      if (G6Checkbox.checked) {
			text.push('\n');
			text.push('Personality assessment: ');
            text.push(G6Dropdown.value); }
		
		if (G7Checkbox.checked) {
			text.push('\n\n');
			text.push('E/O EXAMINATION > NAD ');}
 
		if (G8Checkbox.checked) {
			text.push('\n');
			text.push('I/O EXAMINATION > NAD ');}
		
		 if (G9Checkbox.checked) {
			 const G9TextInputValue = G9TextInput.value;
        
			 if (G9TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(` RADIOGRAPHIC ASSESSMENT: ${G9TextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('');
       
    }
}
		
		 if (G10Checkbox.checked) {
			 const G10TextInputValue = G10TextInput.value;
        if (G10TextInputValue.trim() !== '') {
             text.push('\n\n');
			text.push(`Tx Options: ${G10TextInputValue}`);
			
        } else { 
            text.push('');
       
    }
}
		
      if (G10ACheckbox.checked) {
			text.push('\n');
            text.push('Pt notified that completion of complete denture will take a min of 3mo (i.e. 6 appt with 2weeks interval'); }
		
		if (G11Checkbox.checked) {
			text.push('\n\n');
            text.push('TX DELIVERED> Max & mand alginate primary impression taken. Impression checked for quality, sterilized & bagged. Lab card with instructions for pour up of impression & construction of special trays for ZOE impression written, scanned & sent to the lab.'); }
		if (G12Checkbox.checked) {
			text.push('\n\n');
            text.push('Denture hygiene instructions given for existing denture (i.e. to clean with a soft brush & gentle soap, to remove denture at night & to soak in diluted white vinegar or Milton antibacterial tablets)'); }
	 
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

	
   	
    
     	 text.push('\n');  
     	text.push(`${generatedText1.value}`);
     
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
     
     //Crown END
     
     	  
			  if (crown2G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (crown2supervisorCheckbox.checked) {
			 const crown2supervisornameTextInputValue = crown2supervisornameTextInput.value;
        if (crown2supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${crown2supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (crown2nvCheckbox.checked) {
			 const crown2nvTextInputValue = crown2nvTextInput.value;
        if (crown2nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${crown2nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
			  	if (crown3G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (crown3supervisorCheckbox.checked) {
			 const crown3supervisornameTextInputValue = crown3supervisornameTextInput.value;
        if (crown3supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${crown3supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (crown3nvCheckbox.checked) {
			 const crown3nvTextInputValue = crown3nvTextInput.value;
        if (crown3nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${crown3nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}

	if (crown4G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (crown4supervisorCheckbox.checked) {
			 const crown4supervisornameTextInputValue = crown4supervisornameTextInput.value;
        if (crown4supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${crown4supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (crown4nvCheckbox.checked) {
			 const crown4nvTextInputValue = crown4nvTextInput.value;
        if (crown4nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${crown4nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
  
			  if (crown1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (crown1supervisorCheckbox.checked) {
			 const crown1supervisornameTextInputValue = crown1supervisornameTextInput.value;
        if (crown1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${crown1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (crown1nvCheckbox.checked) {
			 const crown1nvTextInputValue = crown1nvTextInput.value;
        if (crown1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${crown1nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}

// OR END
     
     	  if (surg1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (surg1supervisorCheckbox.checked) {
			 const surg1supervisornameTextInputValue = surg1supervisornameTextInput.value;
        if (surg1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${surg1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (surg1nvCheckbox.checked) {
			 const surg1nvTextInputValue = surg1nvTextInput.value;
        if (surg1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${surg1nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
     
     
     //Perio End 
     if (perio1supervisorCheckbox.checked) {
			 const perio1supervisornameTextInputValue = perio1supervisornameTextInput.value;
        if (perio1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${perio1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (perio1nvCheckbox.checked) {
			 const perio1nvTextInputValue = perio1nvTextInput.value;
        if (perio1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${perio1nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
			  	if (perio2G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (perio2supervisorCheckbox.checked) {
			 const perio2supervisornameTextInputValue = perio2supervisornameTextInput.value;
        if (perio2supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${perio2supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (perio2nvCheckbox.checked) {
			 const perio2nvTextInputValue = perio2nvTextInput.value;
        if (perio2nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${perio2nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}

     //resto end 
     
     if (resto1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (resto1supervisorCheckbox.checked) {
			 const resto1supervisornameTextInputValue = resto1supervisornameTextInput.value;
        if (resto1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${resto1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (resto1nvCheckbox.checked) {
			 const resto1nvTextInputValue = resto1nvTextInput.value;
        if (resto1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${resto1nvTextInputValue}`);
			
        } else {
			 text.push('\n');  
            text.push('N/V: ');
			  }}
			  
			  
			  if (perio1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
     
     
	 // S/C end
     
     
     		if (sc1G22Checkbox.checked) {
			 text.push('\n\n');
            		text.push(`Pt well on discharge`);}
	 
		  
	 if (sc1supervisorCheckbox.checked) {
			 const sc1supervisornameTextInputValue = sc1supervisornameTextInput.value;
        if (sc1supervisornameTextInputValue.trim() !== '') {
             text.push('\n');
			text.push('Supervisor: Dr ');
			text.push(`${sc1supervisornameTextInputValue}`);
		} else {
			text.push('\n');
            text.push('Supervisor: Dr'); }}
	 
		  
	   if (sc1nvCheckbox.checked) {
			 const sc1nvTextInputValue = sc1nvTextInput.value;
        if (sc1nvTextInputValue.trim() !== '') {
             text.push('\n');
			text.push(`N/V: ${sc1nvTextInputValue}`);
			
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
	 
	 

		     	  if (J47Checkbox.checked) {
		text.push('\n\n');
                     text.push('Lab Instructions');
		 text.push('\n'); 
		text.push('Please construct diagnostic models from alginate impression & return on ___ for diagnostic wax up.');}
              if (J48Checkbox.checked) {
	   text.push('\n'); 
	  text.push(`Please construct custom try for PVS impression for tooth ___.`);}
		  
	 
	 	  if (J91Checkbox.checked) {
		text.push('\n\n');
                     text.push('Lab Instructions');
		 text.push('\n'); 
		text.push('Please pour up PVS impression in die stone & mount max & mand model.');}
              if (J92Checkbox.checked) {
	   text.push('\n'); 
	  text.push(`Please construct PFM crown in fine gold cervical collar in SHADE ___ VITA 3D Master for TOOTH ___ OR Please construct Emax/Zirconia/Sinfony crown in SHADE ___ VITA Classic for TOOTH ___ with STUMP SHADE ___.`);}
		
		
		
		
		

		
		
		
		
		
	        generatedText.value = text.join(''); 
    }
   


// Event listener to track user-edited content



});

// JavaScript Document// JavaScript Document