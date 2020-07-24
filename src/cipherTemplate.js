const container = document.getElementById("container");

let valueOffset = "";
let valueToCode = "";
let valueToDecode = "";

const showCipher = () => {
  const empty = "";
  container.innerHTML = empty;

  const infoChipher = `
  <div class="ContainerCipherTemplate">

    <div class='offsetArea'>
      <p>
        Set nivel of difficult
        <br>
        (only numbers)
      </p>
      <input id='inputOffset' type='number'>
    <div/>

    <div class='codeArea'>
      <p>
        TEXT TO CODE
      </p>

      <textarea id='textareaCode' onchange=name="textarea" rows="10" cols="45"  placeholder='Add your text to code here'> </textarea>
    </div>

    <div class='decodeArea'>
      <p>
        TEXT TO DECODE
      </p>
      <textarea id='textareaDecode' name="textarea" rows="10" cols="45" placeholder='Add your text to decode here'></textarea>
    </div>

  </div>`;

  container.innerHTML = infoChipher;
  //-------- END OF TEMPLATE -------//

  // START TO ADD EVENTS TO INPUTS
  document.getElementById("inputOffset").onkeyup = function () {
    valueOffset = document.getElementById("inputOffset").value;
    valueOffset = Number(valueOffset);
  };

  document.getElementById("textareaCode").onkeyup = function () {
    valueToCode = document.getElementById("textareaCode").value.toUpperCase();
    const codeValue = window.cipher.encode(valueOffset, valueToCode);
    console.log(typeof valueOffset);
    document.getElementById("textareaDecode").value = codeValue;
  };

  document.getElementById("textareaDecode").onkeyup = function () {
    valueToDecode = document
      .getElementById("textareaDecode")
      .value.toUpperCase();
    let decodeValue = window.cipher.decode(valueOffset, valueToDecode);
    document.getElementById("textareaCode").value = decodeValue;
  };
};

export default showCipher;
