import React from 'react'
import glamorous from 'glamorous'
import colors from '../constants/colors'

const Content = glamorous.div({
  padding: '15px 15px',
})

const Title = glamorous.h2({
  fontSize: 20,
})

const Info = glamorous.div({
  fontSize: 14,
  fontStyle: 'italic',
  marginTop: '20px',
})

const Link = glamorous.a({
  color: colors.red,
})

const Faq = () => (
  <Content>
    <Title>Задачи</Title>
    <p>
      Нажмите “Добавить” или перейдите на вкладку “Задачи” и создайте список
      планируемых дел. Меняйте порядок выполнения, перетаскивая задачи на нужную
      позицию.
    </p>
    <hr />
    <Title>Настройки</Title>
    <p>
      Укажите в минутах время работы и перерывов, количество помидорок в раунде,
      план в помидорках на сегодняшний день и отметьте, хотите ли видеть
      push-уведомления о начале и окончании помидорок. Чтобы получать
      уведомления, оставьте страницу с таймером открытой в браузере.
    </p>
    <hr />
    <Title>Таймер</Title>
    <p>
      Пользуйтесь им так же, как вашим любимым плеером. Начинайте помидоры,
      повторяйте отрезки работы и отдыха или переходите к следующему с помощью
      кнопок “воспроизведения”, “повтора” и “переключения”.
    </p>
    <Info>
      Подробнее o технике Pomodoro почитать можно{' '}
      <Link
        target="_blank"
        href="https://lifehacker.ru/2015/05/28/all-about-pomodoro/"
      >
        здесь
      </Link>
    </Info>
  </Content>
)

export default Faq
