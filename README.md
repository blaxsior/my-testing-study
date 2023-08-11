# my testing
[테스팅 강의](https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/)를 듣고 내용을 정리합니다.

# 테스팅이란
코드가 의도한 대로 요구사항에 맞게 동작하는지 검사하는 행위

## 테스팅 방식
- manual testing: 직접 개발자 / 사용자의 인력으로 테스팅하기
  - 테스트 계속 반복하기 쉽지 않음 + 코드 바꿀 때마다 직접 테스트해야
  - 사람이 직접 하는 일이라 에러가 발생하기 쉬움.
  - 모든 시나리오에 대해 완벽하게 반영하기 쉽지 않음 + 시간 오래 걸림 
- automated testing: 테스트 코드 작성해두고 테스팅 자동화
  - 초기 테스팅 코드를 작성하는 노력이 필요. but 한번 작성해두면 자동화
  - 항상 동일한 실행, 테스트 보장 -> 예측 가능 + 일관성
  - 테스트 코드는 축적 + 함께 실행되므로 많은 시나리오 커버가 가능
## 테스팅 종류
테스팅 자체는 엄청 다양하지만, 코드 부분에서는 3개 흐름 따른다.
- Unit Testing: 함수/클래스 같이 어플리케이션을 구성하는 작은 단위인 유닛을 테스트
  - 모든 유닛은 개별적으로 테스트 됨.
  - 모든 유닛이 의도적으로 동작하면, 전체 앱도 정상적으로 동작 -> Integration Testing
  - 변경 사항 및 에러를 빠르게 집어낼 수 있지만, 사용자 환경의 다양한 방해요소를 반영하지는 못함.
  - 수행 이유
    - 코드 변경할 때마다 직접 테스트하는 수고를 피할 수 있음
    - 유닛에 대한 테스트 작성하여 많은 코드 / 시나리오  커버 가능
    - 코드 변경되면 작성된 테스트 코드가 실행되서 버그 잡기 쉬움
    - 테스팅에 적합한, 더 좋은 / 깨끗한(clean) 코드를 작성할 수 있음
- Integration Testing: 유닛들이 함께 동작할 때도 정확히 동작하는지 평가하기 위해 유닛 조합을 테스팅
  - 유닛단위로는 잘 동작한다고 유닛을 결합했을 때 잘 동작한다는 보장은 없음
- E2E Testing: 유저 입장에서의 전체 흐름에 대해 테스팅
  - 유저 또는 외부 프로그램이 현재 프로그램과 어떻게 상호 작용하는지에 대한 테스트
  - 작은 유닛 단위가 아니라, 전체 시스템 흐름 단위에서 동작을 테스트
테스팅 방식에 따라 다루는 테스트 범위가 다르기 때문에 하나만 수행하는게 아니라 모두 수행하도록 노력해야 함.

## 테스트 코드를 작성하는 이유

프로젝트 내에서 절대 잘못된 방법으로 사용하지 않을 것이라 해도, 프로젝트가 진행되면서 함수의 기능, 동작이 변경될 수 있으며 이 과정에서 에러가 발생하기 쉽다.  
이 상황에서 테스트 코드를 작성해두면 잠재적으로 발생할 수 있는 에러를 쉽게 갑지하고 처리할 수 있게 된다.  
뿐만 아니라 작성해 둔 테스트 코드는 일종의 API 레퍼런스처럼 작용하여 다른 사람들이 해당 유닛 사용법을 익히는데 도움을 준다.  

- 일단 작성해두면 일일이 테스팅하지 않아도 됨
- 발생 가능한 에러를 탐지 및 방지함
- 테스트 코드는 해당 유닛에 대한 사용 예시가 될 수 있음
- 코드가 변경된 후에도 의도한 대로 동작하고 있는지 평가하면서 의도하지 않은 버그나 에러를 수정할 수 있음 
# 테스트 설정
- test runner: 테스팅 코드를 수행하는 부분
  - 메인 어플리케이션과 관계 없는 테스팅 전용 도구, 개발 환경
  - 테스트 코드를 식별 / 실행 / 결과 출력
  - 언어마다 다양한 도구 존재
- assertion library: 테스트에 대한 기대값을 정의, 성공 / 실패 판정
  - 코드 실행을 통해 기대되는 결과(outcome) 정의
  - 기대값에 대한 결과를 매칭
  - 모든 가능한 기대값 / 상황 커버 가능 (sync / async 등)

## CLI 옵션
모든 명령은 ```vitest```로 시작
| 옵션 | 설명 |
|-|-|
|(없음)| 감시 모드로 실행 |
| run | 감시 없이 실행 |
| reporter &lt;name&gt; | 자세한 설명 추가<br>default, verbose, dot, junit, json 옵션 |
| globals | 테스트 파일 내에서 전역 사용(import X) |
# 테스팅 기초
## AAA 패턴
- Arrange: 테스팅에 사용되는 환경 / 값을 정의
- Act: 대상 코드 및 함수를 실행
- Assert: 생성된 결과를 기대값과 비교 -> 성공 / 실패 여부 판단  

AAA 패턴은 테스트를 구조화하고, 코드에 대한 가독성과 이해를 돕는다.

- 테스팅 과정에서 하드 코딩은 가능한 한 피하자.
- 테스팅 함수가 아닌 다른 방법으로 기대값을 계산할 수 있다면 하드코딩하는 대신 해당 방법으로 기대값을 정의하자.

## 테스팅 시 기억할 점
- 테스트는 최대한 간단하게 유지하자
  - 특정 조건을 만족할 때 함수의 동작이 바뀌는게 아니라면, 복잡한 테스트는 다른 사람이 함수를 이해하기 어렵게 만들 뿐이다.
  - ex 배열 덧셈은 [1, 2, 3, 4, 5] 대신 [1, 2]만 테스트해도 충분
- 여러 상황에 대한 테스트를 수행하자
  - 단일 테스트는 단일 상황만 커버하므로, 하나의 테스트케이스만으로는 모든 상황을 커버할 수 없음
  - 정상적인 입력 / 비정상적 입력 / 에러 발생 상황 등 다양한 경우를 고려해야 함
- 테스팅은 반복적인 작업이다. 필요할 때마다 계속 추가 + 수정하자
  - 현재 작성한 테스트 코드는 현재 상황을 커버한다. 그러나 점차 개발이 진행됨에 따라 기존에 생각하지 못했던 케이스나, 완전히 새로운 케이스에 대한 대응이 필요할 수 있다. 이런 경우 추가적인 테스트 코드를 작성하여 유닛이 기대처럼 동작하는지 보장해야 한다.
  - 제품 코드와 테스트 코드는 서로 보완하며 발전한다.
- 내가 만든, 내가 수정할 수 있는 내 코드만 테스팅하자
  - third-party / built-in API 테스팅은 내 역할이 아니다.(ex querySelector)
- 클라이언트에서 서버 코드를 암시적으로 테스트하지 말자
  - 서버 API는 서버 측에서 테스트해야 할 내용이지, 클라이언트에서 테스트 할 내용이 아니다. 
  - 백엔드 API 자체 말고, API 통신에 따른 프론트엔드 환경의 반응 / 에러는 테스트
- 하나의 테스트는 하나의 유닛 / 행위 / 결과에 대해서만 관여해야 한다
  - 한 테스트에서 사용하는 assertion을 최대한 적게 다루기
  - ex [1, 2]와 []은 다른 테스트 코드에서 다뤄야 함

"one thing" -> one feature  
하나만 테스트하라는 것은 하나의 기능에 대해서만 테스트하라는 것  
하나의 기능을 온전히 테스트할 수 있으려면, 유닛 자체가 세분화되어야 함  
-> 유닛의 최대한 작은 단위로 쪼개야 테스트를 효율적으로 만들 수 있음
## 좋은 테스트 원칙
1. AAA 패턴
2. 한번에 단 하나만 테스트해라
3. 테스트를 준비할 때 본질에 집중해라
4. 테스트 내의 assertion 수를 낮게 유지해라

# 통합 테스트
모듈을 통합할 때 발생할 수 있는 오류를 찾는 테스트  
각각의 모듈이 정상적으로 동작한다고, 이들을 통합했을 때도 정상적으로 동작한다는 보장은 없다. 모듈 간 상호작용이나 인터페이스 수준에서 잘 맞지 않을 수 있다.  
따라서 모듈을 통합했을 때도 의도대로 동작하는지 확인하는 절차인 통합 테스트가 요구된다.

## 테스트 방식
1. 점진적 통합 방식
  - 모듈 단위로 단계적 통합
  - 오류 수정이 용이, 오류를 완전히 테스트 할 가능성 높음
  - ex: 상향식 / 하향식 / 혼합식
2. 비점진적 통합 방식
  - 단계적인 통합 절차 x, 미리 결합되어 있는 프로그램 전체를 테스트
  - 규모가 작은 경우 편리, 시간 절약 가능
  - 프로그램 규모가 커지면 에러 발생 원인 식별이 매우 어려워짐
## 테스트 종류
- 빅뱅 통합 테스트: 상호 인터페이스 고려 X, 모듈을 한꺼번에 통합하여 테스트
- 상향식: 하위 모듈에서 상위 모듈로 통합하며 테스트
  - 테스트 드라이버: 하위 모듈들을 호출하는 도구
  - 클러스터: 종속 모듈의 그룹
  - 동작 방식
    1. 하위 모듈을 클러스터로 결합
    2. 상위 모듈 입출력 확인 위해 드라이버 작성
    3. 통합된 클러스터 단위로 테스트
    4. 테스트 후 클러스터 -> 상위 결합, 드라이버 -> 실제 모듈 대체
  - 장점
    1. 장애 위치 파악 쉬움
    2. 모든 모듈을 개발 안해도 테스팅 가능
  - 단점
    1. 중요 모듈(상위)이 나중에 테스팅 됨
    2. 개발 끝자락에 전체 통합 -> 프로토타입 늦게 나옴
- 하향식: 상위 모듈부터 하위 모듈로 통합하며 테스트
  - 테스트 스텁: 상위 모듈에서 호출하는 가짜 모듈
  - 동작 방식
    1. 주요 모듈은 실제 프로그램
    2. 임시로 종속 모듈 역할 수행하는 테스트 스텁 작성
    3. 깊이 / 너비 우선 통합 + 스텁 실제 모듈로 교체
    4. 모듈 통합 시마다 테스트 실시(회귀 테스트 등)
  - 장점
    1. 상위부터 제작 -> 프로토타입이 빨리 나옴
    2. 중요 모듈부터 테스팅 가능
  - 단점
    1. 스텁 많이 만들어야 하는 부담
    2. 하위 모듈 테스팅은 불충분
- 혼합식(샌드위치)
  - 하위에서는 상향식, 상위에서는 하향식으로 테스트 수행
  - 병렬 테스팅 가능 -> 시간 절약
  - 스텁 / 드라이버 둘 다 필요해서 자원 많이 요구
- 회귀 테스트
  - 이미 테스팅 된 프로그램에 대해 테스팅 반복
  - 변경된 모듈이나 컴포넌트에 새로운 오류 있는지 확인
  - 자원 많이 필요 -> 파급 효과 높은 부분 위주로 테스트
- 빅뱅 통합 테스트
  - 모든 모듈을 동시에 통합 후 테스트
  - 드라이버 / 스텁 없이 실제 모듈 상대로 테스트
  - 장점
    1. 드라이버 / 스텁 안만듬 -> 단시간 테스트 가능
    2. 작은 시스템인 경우 유리
  - 단점
    1. 어디서 에러가 발생하는지 분석하기 어려움
    2. 모든 모듈이 개발된 후에 테스팅 가능

## 코드
```javascript
it("should throw error if at least one item  in array is empty string", () => {
  const input = ['', 2];

  const targetFn = () => { parseStrsToNums(input) };

  expect(targetFn).toThrow();
});
```
통합 테스트는 vitest로 커버 가능

# Async 코드 테스팅
자바스크립트에서 비동기 코드는 콜백 또는 promise 기반이 있다.
## 콜백 테스팅
it에 전달하는 함수의 인자로 ``done`` 함수를 추가한다.
```javascript
describe("generateToken func", () => {
  it("should generate token value", (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch(err) {
        done(err);
      }
    })
  });
});
```
콜백 함수는 별도의 큐로 이동하여 시간이 오래 걸리는 작업이 종료된 후 메인 스레드로 돌아와 실행되는데, 테스팅 툴은 기본적으로 콜백이 실행되기를 기다리지 않는다. 따라서 it 함수가 콜백함수 종료 시점까지 대기할 수 있도록 알려주는 장치가 필요하다.  
done 함수는 it 함수가 done이 호출되는 시점까지 대기하게 만든다. jest / vitest 등의 테스트 툴들은 에러가 던져졌는지를 기준으로 테스트 성공 여부를 판단하므로, 내부에서 에러가 발생하는 경우 done 함수의 인자로 넘겨 it이 콜백 함수의 실패를 알릴 수 있다.

## 프로미스 테스팅
프로미스는 resolve, reject 기반으로 동작하며 테스팅도 expect에 포함된 비슷한 키워드를 이용하여 처리할 수 있다. expect에 프로미스 객체를 전달하고, resolves / rejects를 이용한다.  
```javascript
it("should generate token vlaue", () => {
  const testUserEmail = 'test@test.com';

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
```
프로미스 객체는 async / await 키워드를 이용하여 다룰 수도 있으며, 테스팅도 동일한 방식으로 처리 가능하다.
```javascript
it("should generate token vlaue", async () => {
  const testUserEmail = 'test@test.com';

  const token = await generateTokenPromise(testUserEmail);
  
  expect(token).toBeDefined();
});
```
프로미스가 처리될 때까지 대기하는 것을 보장하기 위해 expect를 return해야 한다. async / await 구문을 이용하는 경우에는 필요 없다.  
공식 문서에서는 resolves / rejects을 이용하는 경우에도 async / await로 대기한다.
- https://vitest.dev/api/expect.html#resolves
```javascript
it("should generate token vlaue", async () => {
  const testUserEmail = 'test@test.com';

  await expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
```

# hooks
테스트들에 대해 동일한 설정이 반복되는 경우 중복을 피하기 위해 이들을 일종의 전역 변수로 분리하고 싶을 수 있다. 그러나 단순히 코드를 분리하면 동일한 객체를 여러 테스트에서 순서대로 사용하게 되므로 테스트를 수행할 때마다 상태가 변경되어 모든 테스트에 대해 동일한 초기 상태를 보장할 수 없게 된다.

hook을 이용하면 각 테스트마다 환경을 초기화하여 사용하도록 구성할 수 있다.
## 종류
- 전체에 대해 1번 수행
  - beforeAll: 테스트 시작 전 1번 실행
  - afterAll: 테스트가 모두 종료된 후 1번 실행
- 각 테스트에 대해 수행
  - beforeEach: 각 테스트 시작 전에 실행
  - afterEach: 각 테스트 종료 후에 실행

# concurrent testing
- 다른 파일: 기본적으로 병렬적으로 테스팅한다
- 동일 파일: 기본적으로는 테스트가 정의된 순서대로 처리하나, ``concurrent`` 를 이용하면 동일 파일 내에서도 병렬적으로 처리하도록 구성 가능하다.  

``concurrent``는 describe, it 수준에서 사용할 수 있다.  
공식 문서 참고: https://vitest.dev/guide/features.html#running-tests-concurrently
```javascript
describe.concurrent("User class", () => {
  //테스트 / hooks 등...
});
```

# Side Effect
함수가 결과값 이외에 다른 상태를 변경시키는 것으로, 함수가 전역변수 · 정적 변수 · 인자 · I/O 데이터를 수정하거나 사이드 이펙트를 가진 다른 함수에서 데이터를 읽어오는 경우에 해당한다. 특정 함수가 사이드이펙트를 가지는 경우 프로그램의 동작을 이해하기 어렵게 만든다.

테스팅에서도 사이드 이펙트는 문제가 될 수 있다. 아래와 같은 함수를 고려하자.
```javascript
export default function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), 'data', filename);
  return fs.writeFile(storagePath, data);
}
```
writeData 함수는 data를 filename 파일에 쓰는 동작을 수행한다. 이때 우리는 직접 작성하지 않은 외부 / third-party API에 대해서는 테스팅하지 않으므로 fs.writeFile이 실제로 파일을 생성하는지 관심이 없다. 우리는 단지 우리가 작성한 코드가 잘 동작하는지만 궁금하다.

여기서 문제는 writeFile과 같은 외부 의존성(우리가 작성하지 않은 코드)이 사이드 이펙트를 만든다는 점이다. 위 코드를 기존 방식으로 테스트하면 각 테스트마다 파일을 생성한다. 따라서 각 테스트 이후 파일을 삭제하는 작업이 동반되어야 한다. 이 과정에서 프로덕션 환경에서 실수로 다른 파일을 지운다면? 매우 큰 문제가 된다.

파일 시스템 이외에도 함수 내부적으로 DB, 서버 API에 접근하고, 이를 변경한다면 이 역시 역시 사이드이펙트로 작용한다. 따라서 우리는 사이드이펙트가 발생하지 않도록 함수 테스트 과정에서 외부 의존성을 가짜로 만들기 위한 방법이 요구된다.

## spies & mocks
[참고 링크](https://stackoverflow.com/questions/52131231/simple-definition-of-stub-spy-fake-and-mock-in-unit-testing)

- dummy: 파라미터로 전달되기는 하지만, 사용되지는 않는 객체. 파라미터 채우는 용도
- fake: 실제로 동작하는 구현을 가지지만, 프로덕션에 적합하지 않은 shortcut
  - ex: in memory test db
- stub: 미리 만들어 둔 답변을 제공하는 객체. 일반적으로 테스트를 위해 프로그래밍 된 것 이외에는 전혀 반응하지 않는다.
- spices: 어떻게 호출되었는지에 대한 일부 정보를 기록하는 스텁으로, 어떤 동작이 이루어졌는지 검증할 때 사용한다.
  - ex: 이메일 서비스에서 메일 전송 횟수 기록
- mocks: 호출하면 사전 정의된 명세대로 결과를 돌려주도록 프로그래밍 된 것. 예상치 못한 요청이 들어오면 에러를 던지고, 기대한 모든 요청이 들어왔는지 검증한다.

수업 중 내용
- spices: 함수에 대한 래퍼 또는 함수를 대체하는 비어 있는 대체물로, 함수가 어떻게 호출되었고, 어떤 변수를 받았는지 같은 정보를 기록한다. 함수가 뭘 하는지는 관심 없고 호출 여부만 궁금한 경우 사용할 수 있다. spy 객체는 원 객체를 대신한다.
- mocks: 특정 api의 모듈 / 코드처럼 큰 단위로 대체하면서 원 함수에는 없는 테스트 용 로직을 제공하여 테스트를 돕는다.

### stub vs mock
https://martinfowler.com/articles/mocksArentStubs.html

코드를 일부 발췌했습니다.
- 기본 코드
  ```java
  // MailService
  public interface MailService {
  public void send (Message msg);
  }
  public class MailServiceStub implements MailService {
    private List<Message> messages = new ArrayList<Message>();
    public void send (Message msg) {
      messages.add(msg);
    }
    public int numberSent() {
      return messages.size();
    }
  }   
  ```
- stub: 상태 검증(호출된 결과를 판단)
  ```java
  class OrderStateTester {
    //...
    public void testOrderSendsMailIfUnfilled() {
      Order order = new Order(TALISKER, 51);
      MailServiceStub mailer = new MailServiceStub();
      order.setMailer(mailer);
      order.fill(warehouse);
      assertEquals(1, mailer.numberSent());
    }
  }
  ```
- mock: 동작 검증(동작이 수행되었는지 판단)
  ```java
  class OrderInteractionTester {
    // ...
    public void testOrderSendsMailIfUnfilled() {
      Order order = new Order(TALISKER, 51);
      Mock warehouse = mock(Warehouse.class);
      Mock mailer = mock(MailService.class);
      order.setMailer((MailService) mailer.proxy());

      mailer.expects(once()).method("send");
      warehouse.expects(once()).method("hasInventory")
        .withAnyArguments()
        .will(returnValue(false));

      order.fill((Warehouse) warehouse.proxy());
    }
  }
  ```
``stub``은 상태를 검증한다. 

위 코드에서는 assertEqual을 이용하여 메일이 호출된 "횟수"를 비교하고 있으며, 이 숫자를 표현하기 위해 MailServiceStub 클래스는 MailService 인터페이스에 정의된 메서드 이외에 numberSent 메서드를 추가로 구현하고 있다. 즉 stub은 상태 기반 검증을 수행하며, 이러한 상태 비교를 위해 원 객체에 없는 추가적인 메서드를 구현하는 경우가 있다.  
stub은 특정 객체를 대신하는 역할이므로, 검증은 assertion library을 이용해야 한다.

``mock obj``의 경우 항상 동작을 검증한다. 

특정 클래스에 대한 기대값 등을 지정할 수 있다. 지정한 기대값을 기반으로 자체적인 assertion 기능이 추가된다.

정말 간단하게 mock = stub + verification이라고 이해했다.  
좀 더 자세한 내용이 궁금하면 아래 링크들 참고.
- https://stackoverflow.com/questions/346372/whats-the-difference-between-faking-mocking-and-stubbing
- https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub
- https://martinfowler.com/articles/mocksArentStubs.html


## spies 예시
```javascript
export function generateReportData(logFn) {
  const data = 'Some dummy data for this demo app';
  if (logFn) {
    logFn(data);
  }

  return data;
}
```
logFn이 뭘 하는지는 관심 없고, 해당 함수가 호출되는지만 궁금하면 spies을 이용한다.
```javascript
describe('generateReportData func', () => {
  it('should execute logFn if provided', () => {
    const spyLogFn = vi.fn();
    generateReportData(spyLogFn);

    expect(spyLogFn).toBeCalled();
  })
})
```

## mock 예시
``vi.mock(모듈이름)``을 작성하면 auto-mocking 알고리즘을 통해 해당 모듈을 찾아서 모듈 내 모든 함수를 empty spy function으로 대체한다.
```javascript
vi.mock('fs');
describe("writeData func", () => {
  it("should execute writeFile Method", async () => {
    const testData = 'test';
    const testFilename = 'test2.txt';

    writeData(testData, testFilename);
    expect(fs.writeFile).toBeCalled(); // spy function으로 대체됨!
  });
});
```
vi.mock의 특징은 다음과 같다.
1. 어디에 코드를 작성하든 호이스팅되어 해당 파일 최상위(import보다)로 이동한다.
  - 호이스팅 되는 특성상 팩토리 외부 변수를 참조할 수 없다.
  - 외부 변수를 참조하고 싶다면 호이스팅되지 않는 [vi.doMock](https://vitest.dev/api/vi.html#vi-domock) 이용
2. vi.mock 선언은 프로덕션 수준에는 영향을 주지 않는다.(테스트에만 영향)
3. vi.mock에 적은 모듈을 사용하는 다른 테스팅 파일이 있을 때, vi.mock 선언이 없는 테스트가 먼저 실행되도록 정렬된다.
  - ex: A.test.js에서는 vi.mock('fs')를 선언했고, B.test.js에서는 하지 않았다면 B.test.js파일을 먼저 실행
```javascript
// 실제 코드
import path from 'path';
import { promises as fs } from 'fs';

export default function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), 'data', filename);
  return fs.writeFile(storagePath, data);
}
// 테스트 파일 내 정의 된 mock 코드
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args.at(-1);
      }
    }
  };
});
```
vi.mock의 두번째 인자로 팩토리를 넘기면 기본 동작을 변경할 수 있다. 위 코드는 path 모듈의 join 메서드가 마지막으로 들어온 인자를 넘기도록 mock을 구성한다.

프로젝트 내에서 default export로 사용되는 경우 ``default: {}`` 로 한번 감싸 넘긴다. 위의 경우 writeData 함수가 정의된 파일에서 path 모듈을 default export로 사용하므로, default 프로퍼티로 감싸 사용해야 한다.
### 원 함수 사용하기
```javascript
vi.mock('./path/to/module.js', async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...mod,
    // replace some exports
    namedExport: vi.fn(),
  }
})
```
mock 함수는 모듈 내 모든 함수를 empty spy function으로 만든다. 만약 원 함수가 필요한 경우 importOriginal 함수를 이용하여 원래 모듈을 가져온다.
### mock implementation 전역으로 사용하기
vitest의 mock 참조 방식은 다음과 같다.
1. ``vi.mock`` 에 제공된 팩토리가 있다면 사용한다.
2. ``__mocks__`` 폴더에서 mocking 대상 모듈과 동일한 이름의 파일을 찾아 만약 있다면 사용한다.
  - ``__mocks__`` 폴더는 각 모듈과 동일한 위치에 존재한다고 간주한다.
    - ex 1: axios -> ``__mocks__/axios.js``
    - ex 2: src/mod.js -> ``src/__mocks__/mod.js``
3. 둘 다 없다면 [auto-mocking](https://vitest.dev/guide/mocking.html#automocking-algorithm) 한다.
  - 모든 배열은 비운다.
  - 모든 primitive, collection은 그대로 둔다.
  - 모든 객체는 깊은 복사(deeply cloned)된다.
  - 모든 클래스 인스턴스 및 프로토타입은 깊은 복사(deeply cloned)된다.

위 참조 방식 중 ``__mocks__`` 폴더에 mock을 제공하는 방식을 이용하면 동일한 구현을 전역적으로 사용할 수 있다. ``toBeCalled`` 같은 assertion을 이용하고 싶다면 vi.fn으로 한번 감싸 spy function으로 만들어야 한다. 
```javascript
// __mocks__/file.js
import {vi} from 'vitest';

export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  })
};
```

# 예시 코드

## 일반적인 경우
```javascript
describe("add function", () => { // 01. 테스팅 대상 정의
  it("should summarize all values in array", () => { // 02. 간략한 설명
    // 03. Arrange
    const numbers = [1,2]; // 이유 없이 복잡하게 만들지 마
    const expected = numbers.reduce((a,b) => a + b, 0);
    // 04. Act
    const result = add(numbers);
    // 05. Assert
    expect(result).toBe(expected);
  });
});
```
- describe
  - 테스팅 대상을 명시, 계층 형태로 관리하는 목적으로 사용
  - 간결하게 테스트 대상이 누군지 정도만 표현(이름, 타입 정도)
- it: 각 테스트케이스 및 간략한 설명을 정의
- AAA pattern
  - Arrange: 테스트에서 사용되는 값 / 환경 정의
  - Act: 테스트 코드를 실행
  - Assert: 테스트 결과를 검증

## 에러 발생 체크
```javascript
it("should throw error if typeof argument === \'symbol\'", () => {
  const value = Symbol('invalid');
  const targetFn = () => {
    const result = transformToNumber(value);
  }
  expect(targetFn).toThrow();
})
```
- expect에 에러를 발생시키는 함수를 내부적으로 실행하는 래퍼 함수(targetFn)를 전달, toThrow로 검증
- toThrow에 에러 생성자 / regex 등 전달해서 구체적인 에러 체크 가능
## 부정하기
```javascript
it("should pass if typeof argument is number", () => {
  const value = 0;

  const validateNum = () => validateNumber(value);

  expect(validateNum).not.toThrow();
});
```
``expect().not``을 이용하여 실행 결과에 대한 부정 가능. 논리적으로 보면 기존 assertion에 not을 붙이는 느낌이 됨.
- not.toThrow: 에러 안던짐
- not.toBe: 그 값 말고는 다 됨 !(a===b)

## expect 함수들
- toBe(v): === 동등성 비교 (같은 객체인지)
- toBeCalled(): 호출되었는지 검사
- toBeCalledTimes(num): 정확히 num번 호출되었는지
- toBeCalledWith(...args): args 인자들과 함께 호출되었는지
- toBeNaN(): NaN값인지 체크
- toBeTypeOf(type): 값의 타입 비교
- toContain(item): 배열 원소 / sub string으로 포함하는지
- toEqual(v): 구성만 같으면 ok (객체 자체 x 속성만 같으면 됨)
- toEqual(expect.arrayContaining(expected)): 배열이 동일 원소 가짐
- toThrow(err?): 에러를 던지는지 체크
- toHaveProperty(name): 특정 프로퍼티 가지는지 검사

# 잡동사니
## code coverage
테스트 코드가 실행될 때 프로그램의 코드가 실행되는 정도를 백분율로 측정한 것으로, 테스트가 얼마나 충분한지 표현하는 지표로 사용될 수 있다.  
코드 커버리지가 높으면 버그가 발생할 확률이 낮겠지만, 모든 코드가 테스팅 대상인 것은 아니며 의미 없는 테스트 코드 추가로도 커버리지가 높아질 수 있으므로, 먼저 핵심적인 테스트를 잘 작성하는 것이 중요하다.

vitest는 코드 커버리지를 볼 수 있는 기능을 기본적으로 지원한다.  
주소 : https://vitest.dev/guide/coverage.html