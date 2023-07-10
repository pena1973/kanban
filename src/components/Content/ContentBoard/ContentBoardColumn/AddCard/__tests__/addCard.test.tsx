import { NewCard } from '.././NewCard/newCard';
import { fireEvent, render, screen } from "@testing-library/react";

describe('test a form add card', function () {
 // это плохой пример для теста и он у меня не получился
 // для проведения теста нужно чтобы из компонента чтото приходило в виде ожидаемых данных
 // а у меня срабатывают функции извне с параметрами и вся логика обработки уже в них и прорисовка тоже  -  и не проверишь
  it('должен быть отказ  если не заполнено название задачи', function () {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();
  render(<NewCard onSubmit={onSubmit} onCancel={onCancel} />);
  const inputName = screen.getByTestId('inputName');
  const btnOnSubmit = screen.getByTestId('onSubmit');

  fireEvent.change(inputName, { target: { value: 'тестовая задача' } })
  fireEvent.click(btnOnSubmit)

  const expectedData: string = 'тестовая задача';
 
    expect(onSubmit).toHaveBeenCalledWith(expectedData);
  });

});