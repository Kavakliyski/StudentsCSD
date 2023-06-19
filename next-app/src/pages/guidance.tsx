import { PageConfig } from "@/styles/PagesConfigElements";


export default function Guidance() {


    return (
        <PageConfig>
            <h1>Ръководство за работа</h1>

            <h2>Статистика</h2>
            <ol>
                <li>Когато съществуа запис със записана <strong>'Желана специалност'</strong>(desired_major), се добавя към сбора на <strong>'Запитвания'</strong>.</li>
                <li>Когато към същия запис <strong>'Заплатил КСК'</strong>(paid_ksk) има стойност 'Да', се добавя към сбора на <strong>'Подали'</strong>.</li>
                <li>Когато към същия запис <strong>'Статус на КСК'</strong>(status_of_ksk) има стойност 'Приет', се добавя към сбора на <strong>'Записани'</strong>.</li>
            </ol>
        </PageConfig>
    )
}
