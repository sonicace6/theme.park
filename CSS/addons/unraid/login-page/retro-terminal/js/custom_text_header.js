
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> _______  __   __  ___   _______  _______  __   __  _______  _______  _______  __   __ 
|       ||  | |  ||   | |       ||       ||  | |  ||       ||       ||       ||  | |  |
|  _____||  |_|  ||   | |_     _||_     _||  |_|  ||_     _||    ___||       ||  |_|  |
| |_____ |       ||   |   |   |    |   |  |       |  |   |  |   |___ |       ||       |
|_____  ||       ||   |   |   |    |   |  |_     _|  |   |  |    ___||      _||       |
 _____| ||   _   ||   |   |   |    |   |    |   |    |   |  |   |___ |     |_ |   _   |
|_______||__| |__||___|   |___|    |___|    |___|    |___|  |_______||_______||__| |__|
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
