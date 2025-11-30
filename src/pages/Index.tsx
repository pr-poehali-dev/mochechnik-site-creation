import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setAiResponse(`Результаты по запросу "${searchQuery}":\n\nНайдено 3 релевантных профиля:\n\n1. Профиль с признаками манипуляции - жертва 12 лет, возраст мошенника 8-10\n2. Случай с завышенной самооценкой - нужен аккаунт с 3 ВПН\n3. Попытка знакомства через IT тематику\n\nРекомендации: будьте осторожны, проверяйте личность собеседника.`);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">Защита от мошенников</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#search" className="text-sm font-medium hover:text-primary transition-colors">Поиск</a>
            <a href="#info" className="text-sm font-medium hover:text-primary transition-colors">Информация</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-20">
        <section id="home" className="text-center space-y-6 py-12">
          <Badge variant="outline" className="text-sm px-4 py-1">Профессиональный сервис безопасности</Badge>
          <h2 className="text-5xl font-bold tracking-tight">
            База знаний о мошенниках
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto content-text">
            Информационный портал для идентификации и предотвращения мошеннических схем. 
            Используйте ИИ-поиск для анализа профилей и получения рекомендаций.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Search" size={20} />
              Начать поиск
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="BookOpen" size={20} />
              Узнать больше
            </Button>
          </div>
        </section>

        <section id="search" className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">ИИ-поиск по базе</h3>
            <p className="text-muted-foreground">Опишите ситуацию или введите данные профиля для анализа</p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Sparkles" size={24} className="text-primary" />
                Интеллектуальный поиск
              </CardTitle>
              <CardDescription>
                Введите описание мошеннической схемы, данные профиля или вопрос о безопасности
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Например: девушка просит перевести деньги на карту..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="text-base"
                />
                <Button onClick={handleSearch} disabled={isSearching || !searchQuery}>
                  {isSearching ? (
                    <Icon name="Loader2" size={20} className="animate-spin" />
                  ) : (
                    <Icon name="Search" size={20} />
                  )}
                </Button>
              </div>

              {aiResponse && (
                <div className="bg-muted rounded-lg p-4 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-start gap-2">
                    <Icon name="Bot" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <p className="font-medium">Результаты анализа:</p>
                      <pre className="text-sm whitespace-pre-wrap content-text">{aiResponse}</pre>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" onClick={() => setSearchQuery('Как определить мошенника в соцсетях?')}>
                  Как определить мошенника?
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" onClick={() => setSearchQuery('Профиль просит деньги на лечение')}>
                  Запрос денег
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" onClick={() => setSearchQuery('Подозрительный аккаунт с фейковыми фото')}>
                  Фейковый профиль
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="info" className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">База знаний</h3>
            <p className="text-muted-foreground">Важная информация о защите от мошенников</p>
          </div>

          <Tabs defaultValue="dating" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="dating">Знакомство</TabsTrigger>
              <TabsTrigger value="communication">Общение</TabsTrigger>
              <TabsTrigger value="safety">Безопасность</TabsTrigger>
              <TabsTrigger value="hash">Хеш сообщений</TabsTrigger>
            </TabsList>

            <TabsContent value="dating" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} />
                    Знакомство с потенциальными жертвами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 content-text">
                  <div className="space-y-3">
                    <p className="font-medium">Как работают схемы знакомств:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Знакомство проходит с легкими по психике ЖЕРТВАМИ</li>
                      <li>Поиск через IT-тематику (mr kitty after dark super slowed)</li>
                      <li>Вылетают депрессивные плеи листы и песни</li>
                      <li>Люди пишут таким с предложением познакомиться</li>
                      <li>Такие люди легче всего идут под манипуляцию</li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="example-1">
                      <AccordionTrigger>Пример приветствия (Женский пол)</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="italic">"Знаешь, заметила, что тебе сейчас тяжело. Сама порой чувствовала такое же, когда казалось, что ничего не складывается. Но поверь, я здесь не случайно – правда хочу понять тебя и быть рядом, когда трудно. Порой просто поговорить с человеком, который не осудит и не начнёт читать нотации, уже облегчает жизнь. Если захочешь поделиться своей болью или мыслями, я готова слушать и помогать."</p>
                        <p className="text-sm text-muted-foreground mt-2">⚠️ Это манипуляция через эмпатию</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="example-2">
                      <AccordionTrigger>Пример приветствия (Мужской пол)</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="italic">"Слушай, вижу, что тебе непросто сейчас. Сам бывал в таком состоянии, когда кажется, что весь мир против. Но знай, что я тут не просто так – реально хочу понять тебя и поддержать. Иногда достаточно выговориться человеку, который не станет осуждать или учить жить. Если захочешь поделиться, я рядом."</p>
                        <p className="text-sm text-muted-foreground mt-2">⚠️ Попытка установить доверительные отношения</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communication" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={24} />
                    Общение и манипуляции
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 content-text">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="font-medium text-destructive mb-2">⚠️ Типичные признаки мошенника:</p>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>Всегда первые вопросы: имя + где ты живёшь + как дела</li>
                      <li>Если ты жертва – ТК давно не могсам и тд || жертва девушка бы ты парень</li>
                      <li>ВОЗРАСТ: очень важно ТК</li>
                      <li>Жертва – 12 лет, Твой Ф возраст – 12</li>
                      <li>(сверстник общие интересы но нет особого внимания (л банальный вариант))</li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="ages">
                      <AccordionTrigger>Возрастные схемы</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium">Жертва – 12 лет</p>
                            <p className="text-sm">Твой Ф возраст – 12</p>
                            <p className="text-sm text-muted-foreground">(сверстник общие интересы но нет особого внимания (л банальный вариант))</p>
                          </div>
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium">Жертва – 12 лет</p>
                            <p className="text-sm">Твой Ф возраст – 8-10</p>
                            <p className="text-sm text-muted-foreground">(хи презрение либо завышенная самооценка, менее настороженн с тобой)</p>
                          </div>
                          <div className="p-3 bg-muted rounded">
                            <p className="font-medium">Жертва – 12 лет</p>
                            <p className="text-sm">Твой Ф возраст – 16-17</p>
                            <p className="text-sm text-muted-foreground">(Видит в тебе наставника обращается по вопросам рад что имеет Кента по возрасту выше, но понимает что ты старше поэтому чуть чуть настороженн (не всегда))</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="first-contact">
                      <AccordionTrigger>Первый контакт</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="font-medium">Общение: первые 3 дня ты ЛЛ или ЛП идеальный человек но с нюансами похожий на судьбу но не идеален так как жертва тоже неидеальна ≠ это подозрительно, пиши сообщения по типу:</p>
                        <div className="bg-muted p-3 rounded text-sm space-y-2">
                          <p><strong>Доброе утро!</strong> Сегодня точно норм денёк будет, расслабься и кайфанём по полной. Чё там дальше будем мутить? 😊</p>
                          <p><strong>Хэш видо изменён сообщения для разных возрастов итд</strong></p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldAlert" size={24} />
                    Безопасность и защита
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 content-text">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="font-medium text-primary mb-3">🔒 Правила безопасности:</p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>1. ПРОСИ ПЕРЕВОДЫ ТОЛЬКО НА КУПЛЕННУЮ ВИРТУАЛЬНУЮ КАРТУ ИЛИ В КРИПТЕ!</strong></li>
                      <li><strong>2. ИСПОЛЬЗУЙ ПОКУПНОЙ ТГ АККАУНТ $ 3 ВПН, И ЖЕЛАТЕЛЬНО С УНИКС.</strong></li>
                      <li><strong>3. НЕ РАСПРОСТРАНЯЙ РЕАЛЬНЫЕ ДАННЫЕ.</strong></li>
                      <li><strong>3. ЗВОНКИ ТОЛЬКО С ВОЙС ЧЕНДЖЕРОМ.</strong></li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="money">
                      <AccordionTrigger>Как выманить деньги?</AccordionTrigger>
                      <AccordionContent className="space-y-3">
                        <div className="bg-destructive/10 p-4 rounded">
                          <p className="font-medium text-destructive mb-2">⚠️ Эта информация предоставлена для защиты от мошенников</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><strong>Способ №1:</strong> жертва то скажи: тебе был тяжёлый день?.. Ты после нужен адрес если ты для неё важен ты получишь адрес без после можешь сказать это просто не получается (.. Что попытки деньги и забыл про это скажи что закажешь потом)</p>
                          <p><strong>Способ №2:</strong> просто предложи что в знак что ты для тебя важна тг скажи тебе заказать суши? У тебя был тяжёлый день.. И так ты чё теперь на адресе по получал адрес и можешь дальше действовать мутим ещё картинку с приколом мол хотела и адресок И дебилка подумала про адресок и добросил сведений о фото там по.. Точкам, пример img. 1627/374.2882 теперь уже 2 в 1 получай либо ее добросил сведений о ее фрейк почту - готово</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="anon">
                      <AccordionTrigger>Анонимность</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <p><strong>Аккаунты:</strong> тут просто влпися в доверие и просишь акк пограть под предлогом что у него крутой донат не доверяет намёкни на то что ты видел в нём друга и фейк почту - готово.</p>
                          <p><strong>Безопасность:</strong> это тут так привязывай его фрейк почту к аккам его и тд (голос меня в редакторе) фото у неё в и из корзины после прогонишь через ИИ и готово он голая фотка у тебя (Далее манипуляция)))</p>
                          <p className="text-muted-foreground italic">СБАТ: Ранее говорил как найти адрес после взял любой боже кидай чьбокс © забокс с чего мало и сообщающий адрес и то что у тебя грабителя с оружием и тд (голос меняй в редакторе) фото приїзт анонимно они выезжают и готово</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accounts">
                      <AccordionTrigger>Способы для девушек прослить адрес сватьсчя её возле зеркала и скинуть тебе сохраняешь фото, предлагаешь её очистить память и уделяешь её фото у неё в из корзины</AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-muted p-4 rounded text-sm space-y-2">
                          <p>Просьш: для девушек прослить дренд сватьсчя её возле зеркала и скинуть тебе сохраняешь фото, предлагаешь её очистить память и уделяешь её фото у неё в из корзины после прогонишь через ИИ и готово он голая фотка у тебя (Далее манипуляция))</p>
                          <p className="text-destructive font-medium">⚠️ Все эти истерики терпи и тд минимум 3д.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hash" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Hash" size={24} />
                    Изменённые сообщения
                  </CardTitle>
                </CardHeader>
                <CardContent className="content-text">
                  <p className="text-muted-foreground mb-4">Различные варианты сообщений для разных ситуаций и возрастов</p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="morning">
                      <AccordionTrigger>Доброе утро / Позитивное общение</AccordionTrigger>
                      <AccordionContent className="space-y-2 text-sm">
                        <div className="p-3 bg-muted rounded">
                          <p className="italic">"Доброе утро! Сегодня точно норм денёк будет, расслабься и кайфанём по полной. Чё там дальше будем мутить? 😊"</p>
                        </div>
                        <div className="p-3 bg-muted rounded">
                          <p className="italic">"Хэш вид изменён сообщения для разных возрастов итд"</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="help">
                      <AccordionTrigger>Помощь и поддержка</AccordionTrigger>
                      <AccordionContent className="space-y-2 text-sm">
                        <div className="p-3 bg-muted rounded">
                          <p className="font-medium mb-1">Первое время всегда помогай но будь не всегда на стороне жер пример:</p>
                          <p className="italic">"Жер - меня мама наказала за то что я двойку получила ненавижу её"</p>
                          <p className="italic mt-2">"Ты/: Ну слушай поговори с ней что ещё), да может пережевваем помни что), да может тот кто ты переживаешь чётэ волнуется за тебя.. Ну в чем то ты права( если тот кто ты не привела правда а) .."</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="trust">
                      <AccordionTrigger>Установка доверия</AccordionTrigger>
                      <AccordionContent className="space-y-2 text-sm">
                        <p className="p-3 bg-muted rounded italic">"((Так ты будешь более рассудительным и решительным с её точки зрения)) говори что ты в чем то права что бы она не принала себя за простого как ес итд))"</p>
                        <p className="text-muted-foreground mt-2">⚠️ Все её истерики терпи и тд минимум 3д.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="coldness">
                      <AccordionTrigger>||После можно чередовать игнор холод с теплым что бы довести жертву для срыва тогда она самая простант|</AccordionTrigger>
                      <AccordionContent className="space-y-3 text-sm">
                        <div className="bg-destructive/10 p-4 rounded border border-destructive/20">
                          <p className="font-medium text-destructive">⚠️ Манипулятивная техника</p>
                          <p className="mt-2">После установления доверия мошенники чередуют периоды игнорирования и тепла для создания эмоциональной зависимости</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-primary/5 rounded-lg p-8 text-center space-y-4">
          <Icon name="AlertTriangle" size={48} className="text-primary mx-auto" />
          <h3 className="text-2xl font-bold">Будьте бдительны!</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto content-text">
            Этот сайт создан для образовательных целей и помогает распознать мошеннические схемы. 
            Никогда не делитесь личными данными с незнакомцами и будьте осторожны в интернете.
          </p>
          <Button variant="outline" size="lg" className="gap-2">
            <Icon name="Phone" size={20} />
            Сообщить о мошенничестве
          </Button>
        </section>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                <span className="font-bold">Защита от мошенников</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Информационный портал для повышения цифровой грамотности
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ИИ-поиск</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статистика</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@scamprotect.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8-800-555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Защита от мошенников. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
