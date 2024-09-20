<template>
  <div id="aboutMe">
    <section id="me">
      <img src="@/assets/img/me.png" alt="Me" />
      <h1>Hugo CEMELI</h1>
      <p>Développeur Web Junior</p>
      <ul>
        <li>
          <img src="@/assets/img/html.png" alt="logo du language html" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
        <li>
          <img src="@/assets/img/css.png" alt="logo du language css" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
        <li>
          <img src="@/assets/img/js.png" alt="logo du language js" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
      </ul>
    </section>
    <section id="myHistory">
      <h2>Présentation</h2>
      <p>
        Issu d'une formation commerciale, la majorité de mes expériences professionnelles concernait la vente de biens et services
        dans le milieu des vins et des spiritueux, objet d'une première passion. En travaillant comme caviste, donc commerçant, j'ai pu constater l'intérêt 
        majeur pour une entreprise d'un bon site internet et d'une maitrise des nouvelles technologies en lien avec le développement web.   
      </p>
      <p>
        Aujourd’hui, je souhaite parfaire mes connaissances afin de pouvoir devenir developpeur full stack et accompagner 
        petites et grandes entreprises dans leur developpement commercial par le biais de sites à la fois attractifs et sécurisés
        leur donnant les outils idéaux pour se développer.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',  // Component name
  data() {
    return {
      // If you need additional dynamic data, define it here
    };
  },  
};

</script>



<style scoped>
#aboutMe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  line-height: 30px;
}

#me {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

#me p {
  width: 30%;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 20px;
}

#me img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

h1 { 
  color: #e38e04;
}

section h2,
section p {
  display: flex;
  justify-content: center;
  padding: 5px;
  letter-spacing: 2px;
  color: #e38e04;
}



section h2 {
  text-decoration: underline;
}

section img {
  width: 50px;
  height: 50px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #043444;
  box-shadow: 5px 5px 20px #bcc9ce;
  width: 90%;
  border-radius: 1%;
  padding-top: 20px;
  margin-top: 20px;
}

#me li img {
  width: 50px;
  height: 50px;
  border-radius: 30%;
}

#me li {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

#myHistory {
  margin-top: 50px;
}

.checked {
  color: #e78414;
}

.skills {
  border-radius: 10%;
}

#myHistory {
  scroll-margin-top: 160px;
}
</style>
