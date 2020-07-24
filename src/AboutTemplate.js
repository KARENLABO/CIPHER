const container = document.getElementById("container");

const showAbout = () => {
  const empty = "";
  container.innerHTML = empty;

  const infoChipher = `
  <div class="personajesCards">
        <h2> estamos en about </h2>
        </div>
       `;

  container.innerHTML = infoChipher;
};

export default showAbout;
