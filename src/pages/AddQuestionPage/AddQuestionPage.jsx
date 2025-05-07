import { useActionState } from "react";
import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select";
import styles from "./AddQuestionPage.module.css";
import { delayFn } from "../../helpers/delayFn";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";
import { Loader } from "../../components/Loader";
import { QuestionForm } from "../../components/QuestionForm";

const createCardAction = async (_prevState, formData) => {
  try {
    await delayFn();
    const newCardQuestion = Object.fromEntries(formData);
    const resources =
      newCardQuestion.resources && newCardQuestion.resources.trim();
    const isClearForm = newCardQuestion.clearForm;

    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: newCardQuestion.question,
        answer: newCardQuestion.answer,
        description: newCardQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newCardQuestion.level),
        completed: false,
      }),
    });

    let data = null;

    if (response.ok) {
      data = await response.json();
      toast.success("New question is successfully created!");
    } else {
      throw new Error("error");
    }

    return isClearForm ? {} : data;
  } catch (error) {
    toast.error("Bad request");
    console.log("error", error.message);
    return {};
  }
};

const AddQuestionPage = () => {
  const [formState, formAction, isPending] = useActionState(createCardAction, {
    clearForm: true,
  });

  return (
    <>
      {isPending && <Loader />}
      <div className={styles.container}>
        <h1 className={styles.formTitle}>Add new question card</h1>

        <div className={styles.formCard}>
          <QuestionForm 
          formAction={formAction} 
          formState={formState}
          isPending={isPending}
          textBtn="Add question"
          />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a quae
        quasi vero, dignissimos amet minus quam eos fugiat, nesciunt voluptas
        facilis odit sequi itaque consequatur explicabo dolore ullam labore
        dolorum tempora praesentium, perferendis reprehenderit. Eum deleniti
        ducimus reiciendis eos explicabo. Unde ipsum ad iste inventore quos at
        impedit sed itaque! Quod magni rerum perspiciatis, voluptas sequi quasi
        laudantium ut consequatur recusandae excepturi voluptates, officiis
        aliquam rem minus autem. Dolore cum animi laboriosam in, optio nobis
        fugit dicta vitae dolorum quam quis reiciendis tempore nam, cupiditate
        illo autem deserunt assumenda aliquam et expedita voluptatibus. Amet
        veritatis quibusdam, facilis natus mollitia impedit eos quae maiores
        dolor non error ad dolore perspiciatis molestiae ratione provident
        blanditiis autem unde, voluptatum aliquid quis incidunt ipsa eligendi.
        Sit, cupiditate? Rem fuga veritatis, molestias quisquam nesciunt vitae
        earum placeat! Molestias repellendus est, ducimus magni neque non,
        cumque ex reprehenderit architecto optio quasi, eligendi deserunt eius
        unde perspiciatis suscipit hic placeat autem odio quo natus amet!
        Recusandae molestias magnam ducimus fugit ipsum adipisci, natus error
        modi enim illum aliquid quod quis explicabo obcaecati aliquam earum
        voluptatem quidem qui voluptatum maiores illo! Beatae nam ratione atque
        accusantium ipsam saepe, doloremque at error modi eos possimus assumenda
        illo qui adipisci expedita perferendis. Nihil laborum, ducimus
        asperiores in temporibus harum laboriosam deserunt nesciunt sapiente
        illo dignissimos qui quo repellat molestias dolorum officiis tenetur
        nisi, reprehenderit vero enim voluptas saepe ad? Vitae, fugit impedit
        aliquam nihil alias in sed repellendus nostrum incidunt expedita esse
        temporibus optio eum? Fuga laudantium nesciunt ratione temporibus
        suscipit doloremque! Tempora, ut laudantium. Minus voluptatum ut est
        labore accusamus laudantium consequuntur animi, eum aspernatur id qui
        possimus ad, quidem a, dolores fugiat. Placeat magnam cupiditate illo
        obcaecati? Aperiam id, deserunt neque debitis, quaerat dolores sint,
        iste consequatur facilis reprehenderit minima. Accusamus ut enim aut ad
        ex, dicta laudantium? Similique, ut. Odit incidunt dolorum cupiditate
        minus ipsam, earum dicta excepturi ab suscipit, consequatur tempora
        ratione deleniti, hic veritatis? Ipsum est debitis quibusdam voluptas
        nisi a odio, dolorum, voluptate voluptatem, tempora quam. Totam, quod
        exercitationem. Eligendi atque porro necessitatibus deserunt iusto hic,
        fugit error, magni exercitationem labore delectus. Nam delectus nulla
        architecto mollitia quam. Quos debitis saepe adipisci quis? Atque vitae
        dolor doloremque repudiandae eum, quidem iure molestias odio officiis
        aspernatur tenetur obcaecati perferendis vero dolores voluptas quasi
        aliquid provident reprehenderit voluptatum quisquam excepturi explicabo
        mollitia laborum est! Perferendis nostrum dolore earum illum temporibus
        quis rem doloremque, accusamus molestias ex cum recusandae adipisci,
        voluptatum enim eius obcaecati, nisi eveniet sit mollitia veniam tenetur
        quisquam. Quidem, assumenda! Quisquam eius voluptates voluptatem natus
        repudiandae fugit delectus, cum modi voluptatibus labore repellendus
        obcaecati provident voluptate quia hic repellat expedita exercitationem
        doloribus! Fuga ratione facilis dolorum libero odit blanditiis sunt
        voluptates sapiente? Iste facere, nihil fuga delectus quae maxime
        laudantium vel ullam consequuntur asperiores accusantium excepturi
        numquam dolorum deserunt praesentium, quis magnam adipisci possimus, id
        consectetur. Porro nemo saepe est quos veritatis iusto tenetur labore!
        Distinctio minima laudantium, eius et harum ipsa modi vel, ea at dolore
        nulla facere quam, tenetur architecto iure deserunt veniam? Minima ipsam
        perferendis praesentium odio, at consequuntur odit non doloribus,
        repudiandae qui, eum harum cupiditate culpa porro est reprehenderit
        aspernatur nihil quisquam excepturi dignissimos earum assumenda!
        Perspiciatis tempore officiis doloribus fuga voluptates delectus
        repellendus, expedita, nisi eligendi vero sint molestiae quaerat, nulla
        ab vel consequuntur omnis? Consectetur modi maxime vel, ab quam aperiam.
        Veritatis, omnis saepe aperiam provident ipsum nisi voluptatibus sed,
        illum a maiores culpa fugiat possimus, non dolores. Odit, similique.
        Sunt, nisi? Magnam labore similique natus cumque harum perspiciatis at
        libero excepturi eius veritatis blanditiis doloremque, temporibus
        sapiente nihil placeat maiores eaque nesciunt earum ab cum delectus
        beatae explicabo ipsam esse? Iusto consequuntur, exercitationem eaque
        doloribus deleniti debitis porro facilis dicta, illum enim est amet
        blanditiis odit saepe sit! Nesciunt cum eius fuga, magnam cumque
        accusamus at voluptatum possimus repudiandae reiciendis, ducimus, qui
        saepe. Earum vitae culpa, corporis quibusdam deleniti, quae maiores
        voluptatibus perferendis soluta quo nihil tempore id asperiores debitis
        explicabo tempora tenetur? Expedita excepturi minima quae! Error
        quibusdam expedita aperiam ratione consectetur? Consectetur deleniti
        tempore expedita quidem mollitia recusandae ullam facilis totam non
        quibusdam temporibus doloremque nisi ipsam error porro tempora nam,
        commodi vitae facere, aliquam natus praesentium inventore enim. Corrupti
        voluptas temporibus expedita suscipit magni ea tenetur debitis natus id
        nulla doloribus dolor distinctio est nisi ex, perspiciatis laudantium
        amet quaerat. Eum ex facilis sequi, velit eius et adipisci eaque vitae
        earum? Harum ipsam nihil quia fugiat eos perferendis sunt culpa
        quibusdam nesciunt consequatur. Aperiam repellat tempore illum numquam
        in ab accusantium autem esse accusamus dicta rerum nesciunt, fugiat ut
        deserunt porro culpa alias! Molestias ipsa nostrum at eveniet aperiam
        sunt id reiciendis, provident dicta magni, et vitae! Eius a non quidem
        eligendi nemo tempore molestiae quis veniam voluptates qui dicta,
        perspiciatis quos! Unde repellendus at, praesentium recusandae saepe
        repellat, tenetur alias suscipit sed modi quo earum enim cupiditate
        nulla eos fuga. Deleniti tempore recusandae distinctio possimus error
        eum quam fugit nam culpa, quos debitis minima veniam? Dignissimos sit
        tempore amet necessitatibus officiis dolorum molestiae repudiandae iusto
        aperiam nobis labore illum maxime cupiditate, voluptas impedit molestias
        ipsam sapiente eligendi! Expedita, error. Molestias omnis mollitia
        ducimus optio qui quo aliquam, ratione voluptates, molestiae sit
        consequuntur! Consectetur tenetur ad cumque, animi quos fugiat nemo
        eveniet, eligendi, magni architecto explicabo blanditiis neque
        perferendis autem placeat? Aliquid explicabo voluptates quasi inventore
        quidem distinctio eos, maxime excepturi consectetur quaerat impedit,
        totam saepe unde, incidunt mollitia. Sunt omnis ipsa dolores natus,
        deserunt itaque quia impedit molestias dicta, perferendis amet fugit
        nobis accusamus asperiores facilis dolore alias magnam officiis dolorem
        eos excepturi! Repellat vel quod fuga quas officia, tempore ipsam quo
        quam, sit ex corrupti eligendi labore quisquam rerum delectus? Eius
        odio, obcaecati voluptatem quae praesentium sequi ex? Consectetur
        voluptates vel vero quasi harum eos laboriosam aspernatur magnam?
        Blanditiis, eos ab provident esse possimus amet ex impedit quaerat!
        Delectus ut ipsum ex repellat enim beatae ab? Cum officia incidunt ab
        illum a quasi saepe delectus fugit sit ipsa amet animi minus, maxime,
        officiis libero facere tempore ducimus voluptatibus nostrum? Similique
        quidem dolore quo voluptatem tenetur quod nesciunt. Odit tenetur
        mollitia facere similique deleniti corrupti velit, nam cumque, sed
        distinctio ipsum cupiditate est quam. Sint, temporibus nobis ad eveniet
        autem ducimus ex culpa dolorum, exercitationem molestiae deserunt, totam
        architecto repudiandae error eos nulla rerum corrupti! Necessitatibus
        dolorem, mollitia aspernatur consequatur quam facilis dignissimos
        nostrum laboriosam aliquid, sunt soluta porro velit enim quaerat
        assumenda culpa est nihil voluptatum magnam beatae eligendi veritatis.
        Sint quidem eligendi blanditiis architecto earum quibusdam aliquam
        temporibus tempora maxime. Natus modi laboriosam adipisci vero aliquid
        molestiae corrupti molestias iste quam assumenda repellendus maiores
        placeat maxime, quibusdam quas amet recusandae temporibus dolore tempore
        ipsa minima? Doloremque praesentium odit eaque, minus rem quisquam
        delectus officia totam et quos omnis dolore eligendi reprehenderit, iste
        laborum cupiditate nobis pariatur. Nobis itaque explicabo quos iste
        cupiditate officia autem doloribus vel. Nulla facere molestias sit
        corporis ipsam placeat. Cupiditate reiciendis officia, illo saepe dolor
        voluptatem, voluptas culpa necessitatibus ut mollitia provident incidunt
        sunt accusantium architecto nobis? Dignissimos similique fuga sapiente
        quo voluptas eius pariatur, aperiam, nobis vero sit quod. Laborum
        tempore alias repellendus! Quaerat neque consequuntur ipsam mollitia
        dolore inventore ab iusto nostrum atque? Quam distinctio quidem, impedit
        nam sunt, placeat nobis ex in, reiciendis explicabo voluptates
        exercitationem. Dicta quod nostrum beatae, assumenda doloribus molestias
        ex numquam. Earum ratione et harum porro voluptate nulla non dolores
        asperiores, magnam nostrum officia sint dignissimos consectetur eligendi
        incidunt error neque molestiae tempore? Iste hic perferendis
        voluptatibus odit! A, fugiat! Cum repellendus minus fugit error? Alias
        veritatis beatae quisquam provident corrupti officiis ad consequatur
        laborum fugiat, ab tempore quidem ipsum consectetur nobis porro fugit
        maxime voluptatem ipsa. Molestias quaerat harum doloremque sit officiis
        adipisci! Obcaecati illo provident esse? Quidem excepturi ut itaque
        magni earum, eum quod molestiae ullam neque ipsum fugit consequuntur
        optio dicta beatae iste sunt tempora asperiores praesentium accusantium
        cupiditate quaerat. Architecto nemo quae ducimus recusandae corporis
        doloremque sint, est asperiores in ipsum perferendis a quia excepturi
        quibusdam nobis officia. Officia facilis dolorem assumenda alias! Atque,
        fugit molestiae odio error explicabo deleniti quae! At, optio totam sit
        aliquid perferendis ducimus, rem a maxime minima magnam mollitia.
        Cumque, vitae quis recusandae, doloribus nam deleniti deserunt alias
        quod, ipsum id tenetur sint doloremque voluptatum? Ipsam nisi asperiores
        laborum facere veritatis quas aliquid tenetur eum iusto ullam
        doloremque, enim totam quos at ipsa architecto deleniti pariatur numquam
        officia obcaecati! Accusantium commodi tenetur fugit tempora aut
        necessitatibus, delectus doloribus accusamus praesentium vero provident
        ducimus, natus, corrupti nulla hic est! Ut ipsa, mollitia cupiditate sit
        aliquam porro architecto inventore odit nisi earum dicta doloremque
        debitis corporis voluptate illum neque commodi impedit praesentium
        natus, at atque quia, id ab. Natus ut, odit adipisci eligendi nulla
        temporibus repudiandae aliquam corporis, molestias recusandae ratione
        provident error eaque commodi nihil! Beatae rerum voluptas nam incidunt,
        fuga quae ad ipsa nobis pariatur laudantium quos repudiandae at dolores
        ab maiores expedita earum aliquam quod, eum sapiente? Excepturi sint
        perferendis accusamus cumque repellat ipsam, quidem ullam accusantium
        aspernatur, atque corrupti molestias, quis harum dolore vitae! Est, nisi
        voluptatum.
      </p>
    </>
  );
};

export default AddQuestionPage;