// Определение количества этажей в здании
const numFloors = 19;

// Создание списка лифтов
const lifts = [
  { id: 'A', currentFloor: 0 },
  { id: 'B', currentFloor: 8 }
];

// Функция для определения наиближайшего лифта
function findNearestLift(floor) {
  let minDistance = numFloors;
  let nearestLift;

  for (let lift of lifts) {
    let distance = Math.abs(lift.currentFloor - floor);
    if (distance < minDistance) {
      minDistance = distance;
      nearestLift = lift;
    }
  }

  return nearestLift;
}

// Пример использования
const floor = 1;
const nearestLift = findNearestLift(floor);

console.log(`Отправляем лифт ${nearestLift.id}`);