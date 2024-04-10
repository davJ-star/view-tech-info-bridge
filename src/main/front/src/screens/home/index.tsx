import { useCallback, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const HomeScreen = () => {
  const [news, setNews] = useState<
    {
      title: string;
      body: string;
    }[]
  >([
    {
      title: '네이버 AI 임원들 대거 미국행…인텔과 反엔비디아 동맹',
      body: '업계 관계자는 "SW 기술로 AI 모델을 경량화해도 이를 고려하지 않은 칩에선 오히려 속도가 느려...',
    },
    {
      title: '구글, 생성형AI 개발 도구 3종 공개...개발 생태계 지원',
      body: '구글이 생성형 인공지능(AI) 개발을 지원하기 위한 오픈소스 도구 3종을 공개했다. 오픈AI와 달리 자체...',
    },
    {
      title: 'MS, 日에 역대 최대 규모 4조원 투자… “AI 데이터센터 확충”',
      body: '마이크로소프트(MS)가 인공지능(AI) 기반을 강화하기 위해 일본에 2년간 29억 달러(약 3조900...',
    },
    {
      title: '유비소프트 한국 지사 철수...글로벌 구조조정 여파',
      body: '전세계적인 게임산업 구조조정 여파가 지속되는 가운데, 프랑스에 본사를 둔 글로벌 게임사 유비...',
    },
    {
      title:
        "\"울 엄마도 나도 20대 '리즈' 시절로 돌아갈 수 있다\"…'이것' 하나면 된다",
      body: "데뷔 62년차 ‘국민 배우’이자 ‘국민 엄마’ ‘국민 할매’ 나문희 씨가 영화 '수상한 그녀'처럼 20대 리...",
    },
    {
      title: '삼성페이 사용자 70% 삼성월렛으로 전환',
      body: '삼성전자는 기존 삼성페이 사용자의 70% 이상이 삼성월렛으로 전환했다고 밝혔다. 삼성월렛 출...',
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextNews = useCallback<() => void>(() => {
    setCurrentIndex((currentIndex + 3) % news.length);
  }, [currentIndex, news.length]);

  const handlePrevNews = useCallback<() => void>(() => {
    setCurrentIndex((currentIndex - 3 + news.length) % news.length);
  }, [currentIndex, news.length]);

  console.log(currentIndex);

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={2}>
          <Button
            variant="outline-secondary"
            onClick={handlePrevNews}
            className="d-block mx-auto"
          >
            <FaCaretLeft />
          </Button>
        </Col>
        <Col xs={8} md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={4} className="text-center">
                  <Card.Title
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex].title,
                    }}
                  />
                  <Card.Body
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex].body,
                    }}
                  />
                </Col>
                <Col xs={4} className="text-center">
                  <Card.Title
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex + 1].title,
                    }}
                  />
                  <Card.Body
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex + 1].body,
                    }}
                  />
                </Col>
                <Col xs={4} className="text-center">
                  <Card.Title
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex + 2].title,
                    }}
                  />
                  <Card.Body
                    dangerouslySetInnerHTML={{
                      __html: news[currentIndex + 2].body,
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Button
            variant="outline-secondary"
            onClick={handleNextNews}
            className="d-block mx-auto"
          >
            <FaCaretRight />
          </Button>
        </Col>
      </Row>
    </Container>
    // TODO - footer tag
  );
};

export default HomeScreen;
