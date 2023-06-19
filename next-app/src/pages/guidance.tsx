import { PageConfig } from "@/styles/PagesConfigElements";


export default function Guidance() {


    return (
        <PageConfig>
            <h1>Ръководство за работа</h1>

            <h2>Статистика</h2>
            <ol>
                <li>Когато съществуа запис със записана <strong>&apos;Желана специалност&apos;</strong>(desired_major), се добавя към сбора на <strong>&apos;Запитвания&apos;</strong>.</li>
                <li>Когато към същия запис <strong>&apos;Заплатил КСК&apos;</strong>(paid_ksk) има стойност &apos;Да&apos;, се добавя към сбора на <strong>&apos;Подали&apos;</strong>.</li>
                <li>Когато към същия запис <strong>&apos;Статус на КСК&apos;</strong>(status_of_ksk) има стойност &apos;Приет&apos;, се добавя към сбора на <strong>&apos;Записани&apos;</strong>.</li>
            </ol>
        </PageConfig>
    )
}
