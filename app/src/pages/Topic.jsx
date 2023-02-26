import React from "react";
import Sidebar from "../admin/Sidebar";
import LessonWindow from "../components/LessonWindow";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../api/request";

import { useAuth } from "../context/AuthContext";

import axios from "axios";

import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Topic = ({ navHeight, lessons }) => {
  const { id } = useParams();
  const { token } = useAuth();

  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const url = `${BASE_API_URL}/lessons/topics/${id}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data;
      });
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <StyledContainer>
        <Loading />
      </StyledContainer>
    );
  } else if (isError) {
    return <h1>Error!</h1>;
  } else {
    return (
      <>
        <Sidebar navHeight={navHeight}></Sidebar>
        <LessonWindow>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          debitis rem quos, in accusantium dolor, delectus quia dolorum nesciunt
          provident saepe totam eum, voluptate porro soluta nulla laudantium
          aliquam ad quisquam odit maxime reiciendis deserunt natus! Ipsa quia
          doloremque vero tenetur iusto? Eligendi, nisi. Nam nesciunt
          consectetur, mollitia dolores error asperiores voluptatum ab commodi
          nostrum. Voluptates fugiat commodi nostrum temporibus perferendis
          veritatis, impedit saepe modi, a dicta id sit quam. Eos voluptatibus
          porro atque debitis in minima! Commodi fugiat et eligendi hic eius.
          Voluptas consequatur doloremque laboriosam perspiciatis, illum quis
          ipsa minus explicabo eius vel consequuntur porro vitae ipsam dolores!
          Assumenda debitis temporibus earum nam ducimus aliquam reiciendis
          perspiciatis, dolor doloribus fugit minus corrupti aliquid quo
          ratione. Delectus vitae officia atque soluta obcaecati iusto ea
          accusantium quia odit necessitatibus! Dolores obcaecati possimus
          architecto facere quaerat voluptas ipsam accusantium ut odit suscipit
          minima nostrum corrupti quas ullam libero aliquam earum rerum fugiat,
          ipsa tempora nemo natus placeat reprehenderit maiores. Temporibus
          corporis nisi culpa repellat quos labore, vel id reprehenderit dicta
          laudantium recusandae nam, autem quae dolor architecto facere facilis
          magni excepturi. Tempora iure magni sunt minus soluta ad aspernatur
          maiores. Ea temporibus iusto impedit odit nostrum facilis sint
          laboriosam, dignissimos cupiditate voluptas voluptatem, vero numquam
          dicta odio error? Voluptates, rem! Animi, fugit pariatur dignissimos
          repudiandae distinctio hic voluptatum molestiae non facere eaque fuga.
          Quidem minus quam accusamus ea vitae quasi doloremque perspiciatis
          corrupti voluptates, eaque maxime similique, quaerat possimus
          corporis? Eum voluptas sapiente placeat numquam, autem animi. Illo,
          recusandae saepe? Voluptates obcaecati repellat exercitationem dicta
          modi accusantium veniam quod? Suscipit, in? Distinctio officiis
          tenetur adipisci repellat perferendis harum quidem a dolores? Quod
          optio nisi porro inventore harum nesciunt aut consequuntur molestias
          possimus quae assumenda dignissimos, rem, placeat tempore iste rerum.
          Voluptatibus autem, nostrum nulla culpa dolorem enim vel debitis
          tenetur deserunt est assumenda eaque error atque aliquam repellendus
          dolore velit officia mollitia aut? Sed a soluta iure quos quis?
          Officiis doloremque expedita ad maxime possimus commodi ullam. Quia
          dolores nulla magnam aut architecto eum sint est minus ratione
          mollitia sapiente, laudantium nobis ad quo? Nesciunt deserunt
          reprehenderit beatae, id natus, quod debitis animi fugit, aliquid
          culpa neque qui blanditiis odit alias vel praesentium consectetur
          sapiente. Sapiente, nam consequuntur. Nihil autem maxime, aspernatur,
          optio necessitatibus ratione sint molestias quaerat quod perspiciatis
          neque quas corporis cumque facere eligendi quidem consectetur
          asperiores nulla inventore non sunt id voluptas tenetur. Voluptate
          commodi in voluptatum a consectetur enim magni odit corrupti minus
          blanditiis rem eaque assumenda officiis quasi possimus molestiae nobis
          ea, sunt consequuntur quibusdam illo? Aperiam tempora explicabo
          dolorem, consequatur corporis, magni laboriosam totam itaque
          perferendis atque eligendi similique ipsum minus voluptate natus
          quidem deleniti provident dignissimos alias! Doloribus error ad
          consequatur natus dolorum quisquam pariatur? Architecto sit porro
          veritatis iste voluptates. Sapiente, distinctio eaque. Voluptatum quam
          quibusdam aliquid repellat velit doloribus cupiditate totam
          necessitatibus, ad perferendis consectetur voluptates, quidem iste
          enim molestias excepturi. Blanditiis consectetur exercitationem
          cupiditate voluptas. Et aspernatur quod, ab porro numquam iure dicta
          voluptate odit quisquam voluptatibus odio quae molestias quis
          cupiditate facilis cum nam explicabo quo eos, consequuntur labore
          quibusdam! Sapiente quaerat amet incidunt reiciendis est ipsam quos,
          deserunt molestias placeat exercitationem eveniet sint perspiciatis
          mollitia quia quibusdam laborum quam eius autem? Eaque consequatur
          ipsa eum. Debitis accusantium libero laboriosam accusamus voluptatum
          adipisci culpa odio quidem, temporibus, vitae ducimus repellendus
          eligendi ratione fugit perferendis. Molestiae reiciendis repellendus
          incidunt omnis asperiores soluta excepturi maiores quae est adipisci
          ut non iste pariatur, consequuntur fugiat voluptate facilis qui odio
          eligendi. Dolor ipsam vero id debitis necessitatibus numquam rem totam
          nulla eius ut. Rerum sit at eos iusto quas sint nobis neque quos
          blanditiis ipsam maiores quaerat, et atque cumque earum
          necessitatibus. Provident iusto sapiente consectetur doloremque dolor
          officia repellat illo quo totam in. Cumque sequi totam sed, voluptates
          placeat nobis provident recusandae aliquam doloribus, maiores iure
          temporibus exercitationem tenetur inventore ea aperiam labore dolore
          porro eligendi nihil voluptatum debitis dolor ipsa fuga! Sint magnam
          modi ratione facere laboriosam incidunt ab impedit? Et, perspiciatis
          aliquam voluptatibus dolor voluptas dolorem temporibus amet, facilis
          veritatis quis odio recusandae, voluptatem quidem deleniti iusto culpa
          ducimus quam vitae a tempora porro! Ducimus saepe sint fugit a
          molestiae repellat cupiditate repellendus nam debitis consequuntur
          iusto error velit officiis, facere atque dignissimos deleniti sed
          dicta, ipsum veritatis nisi odio fuga? Cum fuga architecto dolores
          quaerat non itaque, quo laborum pariatur blanditiis, eaque, est odio
          cupiditate maiores illo error. Sed facere alias doloribus nam, enim
          nisi, magnam rerum iusto itaque quae eaque consequuntur! Et illo iusto
          quo maxime fugiat explicabo facilis qui culpa doloremque animi maiores
          ex iure impedit ipsum, nobis voluptatum quaerat nihil ipsam ut
          similique error eveniet voluptatibus voluptates repudiandae. Corrupti,
          ullam explicabo dignissimos atque cupiditate quasi quaerat eius nulla
          mollitia in sed aut incidunt dicta modi esse minus totam temporibus
          dolorem cum nemo voluptas impedit tenetur accusamus quisquam. Esse
          magni excepturi, dignissimos facilis quam ex, placeat officia itaque
          aliquam a voluptatem ut fugit molestiae fuga est nemo eligendi odio?
          Placeat fugit earum provident cupiditate nobis deleniti veritatis quod
          ab temporibus. Ratione earum aut commodi quam rem blanditiis sint sit
          nam accusantium excepturi ipsa optio tempora laudantium accusamus
          quidem dolor, sed minima dicta nobis dolorum perferendis. Sit
          veritatis quasi dicta nisi animi voluptas earum consectetur
          praesentium nihil? Dolorum, praesentium maiores. Itaque assumenda
          culpa qui non saepe repudiandae eaque ex eveniet, praesentium dolores
          vitae excepturi tempore commodi explicabo temporibus modi, inventore
          quae quo impedit perferendis! Cupiditate praesentium ullam eum, hic,
          accusamus cumque magnam saepe adipisci et quae autem voluptas,
          architecto non impedit molestias animi nesciunt eos pariatur
          laudantium ratione reiciendis. Repellat sed praesentium possimus,
          dicta totam iste delectus doloribus magnam eveniet impedit, odio
          similique eligendi, assumenda quam et. Asperiores hic quas fugiat
          molestiae numquam provident doloribus cupiditate veritatis velit
          nostrum voluptatum excepturi cum, pariatur vero voluptates quae vitae
          alias a minus corrupti magnam. Temporibus consectetur sequi cum
          quaerat! Quisquam saepe, neque unde voluptates doloremque hic, magnam
          dignissimos, sapiente dolorem culpa mollitia molestiae earum. Saepe,
          asperiores. Aut earum porro minima. Et doloremque quod debitis quo
          eveniet alias consectetur architecto ab nobis.
        </LessonWindow>
      </>
    );
  }
};

export default Topic;
