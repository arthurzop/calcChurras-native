import * as S from "./style.jsx";
import Header from "../../components/header/header";

import picanha from '../../../assets/images/image1.png'
import cupim from '../../../assets/images/image2.png'
import alcatra from '../../../assets/images/image3.png'

export default function Receitas() {
  return (
    <S.Body>
      <Header />
      <S.CriarContainer>
        <S.Title>Receitas</S.Title>
        <S.ReceitaContainer>
          <S.ReceitaTitle>Picanha na Brasa</S.ReceitaTitle>
          <S.ReceitaSubtitle>Ingredientes:</S.ReceitaSubtitle>
          <S.ReceitaItem>• 1 Picanha</S.ReceitaItem>
          <S.ReceitaItem>• Sal Grosso a gosto</S.ReceitaItem>
          <S.ReceitaItem>• Pimenta do Reino moída</S.ReceitaItem>
          <S.ReceitaSubtitle>Modo de Preparo:</S.ReceitaSubtitle>
          <S.ReceitaItem>
            1. Adicionar o sal grosso e a pimenta do reino em uma tigela e
            misture bem. Com uma faca faça cortes rasos na picanha no lado que
            tem a gordura. Tempere a picanha com mix de sal grosso e pimenta do
            reino.
          </S.ReceitaItem>
          <S.ReceitaItem>
            2. Em seguida insira a picanha no espeto ou em uma grelha. Coloque a
            gordura para cima e leve para assar na churrasqueira. Deixe a grelha
            ou espeto 15 cm da brasa por 10 minutos para selar a carne.
          </S.ReceitaItem>
          <S.ReceitaItem>
            3. Quando a carne começar a dessorar o suco, vire a gordura para
            baixo e deixe por mais 10 minutos. Após esse tempo será o momento de
            subir a grelha e deixá-la 40cm sobre a brasa.
          </S.ReceitaItem>
          <S.ReceitaItem>
            4. Deixe assar por 40 minutos nessa altura com a gordura para cima.
            Após os 40 minutos, vire a carne novamente com a gordura para baixo.
            Neste momento é a hora de deixar a gordura bem torradinha e ficar
            com aspecto dourado.
          </S.ReceitaItem>
          <S.ReceitaItem>
            5. Quando ela estiver já bem douradinha retire da brasa e deixe
            descansar por 5 minutos. Comece a cortar da parte menor para parte
            maior em fatias finas e sirva em seguida.
          </S.ReceitaItem>
          <S.ReceitaImg source={picanha}/>
          <S.Divider/>
          <S.ReceitaTitle>Churrasco de Cupim</S.ReceitaTitle>
          <S.ReceitaSubtitle>Ingredientes:</S.ReceitaSubtitle>
          <S.ReceitaItem>• 1 peça de cupim (1,5 kg)</S.ReceitaItem>
          <S.ReceitaItem>• ½ xícara (chá) de manteiga sem sal, em temperatura ambiente (100 g)</S.ReceitaItem>
          <S.ReceitaItem>• 2 pitadas de pimenta-do-reino</S.ReceitaItem>
          <S.ReceitaItem>• 1 cebola média picada</S.ReceitaItem>
          <S.ReceitaItem>• 2 dentes de alho picados</S.ReceitaItem>
          <S.ReceitaItem>• Celofane próprio para churrasco</S.ReceitaItem>
          <S.ReceitaSubtitle>Modo de Preparo:</S.ReceitaSubtitle>
          <S.ReceitaItem>
            1. Coloque o cupim em uma superfície lisa e com o auxílio de uma faca, faça furos em toda a superfície e transfira para um espeto.
          </S.ReceitaItem>
          <S.ReceitaItem>
            2. Em uma tigela média, coloque a manteiga, a pimenta-do-reino, a cebola, o alho, misture e reserve.
          </S.ReceitaItem>
          <S.ReceitaItem>
            3. Transfira o cupim no espeto para o celofane e distribua o tempero reservado por toda a peça.
          </S.ReceitaItem>
          <S.ReceitaItem>
            4. Embrulhe a carne com o celofane e faça varias voltas torcendo as extremidades e amarrando com um pedaço do próprio celofane.
          </S.ReceitaItem>
          <S.ReceitaItem>
            5. Leve à churrasqueira no braseiro alto (60 cm) de distância por 4 horas, virando na metade do tempo.
          </S.ReceitaItem>
          <S.ReceitaItem>
          6. Retire o celofane, transfira o liquido para uma tigela e utilize-o para pincelar toda a superfície do cupim. Volte à churrasqueira no braseiro médio (40 cm da brasa) por 20 minutos, ou até dourar, virando na metade do tempo.
          </S.ReceitaItem>
          <S.ReceitaImg source={cupim}/>
          <S.Divider/>
          <S.ReceitaTitle>Miolo de Alcatra</S.ReceitaTitle>
          <S.ReceitaSubtitle>Ingredientes:</S.ReceitaSubtitle>
          <S.ReceitaItem>• 1 Miolo de Alcatra</S.ReceitaItem>
          <S.ReceitaItem>• Sal Grosso a gosto</S.ReceitaItem>
          <S.ReceitaSubtitle>Modo de Preparo:</S.ReceitaSubtitle>
          <S.ReceitaItem>
            1. Corte a alcatra em bifes grossos, de 8 a 10 cm de comprimento.
          </S.ReceitaItem>
          <S.ReceitaItem>
            2. Salpique de ambos os lados com sal grosso.
          </S.ReceitaItem>
          <S.ReceitaItem>
            3. Coloque no nível médio da churrasqueira, em braseiro forte.
          </S.ReceitaItem>
          <S.ReceitaItem>
            4. Vá virando o espeto até que a carne adquira um tom marrom escuro, de ambos os lados, estando prontos para servir.
          </S.ReceitaItem>
          <S.ReceitaItem>
            5. Retire o espeto da churrasqueira, corte em fatias finas da parte externa já assada e sirva.
          </S.ReceitaItem>
          <S.ReceitaImg source={alcatra}/>
        </S.ReceitaContainer>
      </S.CriarContainer>
    </S.Body>
  );
}
