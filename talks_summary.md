# Already viewed
### [Nothing is Something](https://www.youtube.com/watch?v=OMPfEXIlTVE) [00:35:52] by **Sandi Metz** (2015)
How to program without using if?
Explica como utilizar el patron strategy para obtener
combinaciones de House con distintos formatos y distintos sort_algorithms
Que con herencia estamos limitados para obtener esto.
Para explicar utiliza la comparacion del metodo en diferentes branches.
Ahi se da cuenta de que lo que varia es el orden.
Entonces contruye 2 estrategias de ordenamiento, la que no hace nada DefaultOrder y la otra RandomOrder
La estrategia es identificar que es lo que se hace distinto en cada branch del condicional, darle 
un nombre y crear 2 objetos que tomen la responsabilidad de ese comportamiento.


### [Confident Code](https://www.youtube.com/watch?v=T8J0j2xJFgQ) [00:31:24] by **Avdi Grimm** (2012)
Every method does:
1-Gather Input
2-Perform Work
3-Deliver Result
4-Handling Errors

-----------------------

1-Gather Input
  * Duck typing is treat the object as a duck, assumes that if is not it will complaint
  * The opposite of dick typing is switch statement smell
  * How can my method trust that input objects(or data) allways respond to the interface I need?

  If you find yourself doing these __over the input__:
    * Switch over a type of an object
    * Checking for method existence
    * Check for nil
  Then you can:
  __Coerce Input__
    * __validate type preconditions__ by calling `.to_s`, `.to_i`, `Array()` on the types that you expect.

__Decorate Input__
    * Enclose the switch over the object and introduce special case object,
       making sure that for all cases conforms to the same interface

__Reject invalid Input__
  * If you cannot wrap the input with a switch for special cases, then validate preconditions.
  * ( raise error | return do-nothing) if precondition not met

__Do nothing with NullObject__
  * return a NullObject which means do-nothing
  * The NullObject returns self for all method calls
  * A useful constructor for NullObject is Maybe() method

__Use default values__
  * Another way of handling nil cases is defining a defalut value

2-Perform Work
* JQuery Style
* Chaining over an arryfied result
* This avoid error handling by doing-nothing when some step in the chain returns empty

3-Deliver Result
* Don't return nil
* Return special-case or null-object
* Or raise an error

4-Handling Errors
* Isolate error handling with a bouncer method(raise error or do-nothing)
* Use checked_xxxx methods where xxxx represents a side-effect that can raise errors

### [Architecture the Lost Years](https://www.youtube.com/watch?v=WpkDN78P884) [01:06:38] by **Robert C. Martin** (2011)

# Pending Talks
## Go
* [SQLite and Go](https://www.youtube.com/watch?v=RqubKSF3wig) [00:32:02] by **David Crawshaw** (2018)
* [Things in Go I Never Use](https://www.youtube.com/watch?v=5DVV36uqQ4E) [00:24:52] by **Mat Ryer** (2018)€‹
* [cgo - Safely Taming the Beast](https://www.youtube.com/watch?v=lhMhApWQp2E) [00:48:20] by **Filippo Valsorda** (2016)
* [Communicating Sequential Goroutines](https://www.youtube.com/watch?v=gO1qF19y6KQ) [00:50:15] by **Adrian Cockcroft** (2016)
* [Crypto for Go Developers](https://www.youtube.com/watch?v=2r_KMzXB74w) [00:31:14] by **George Tankersley** (title of Youtube video wrong) (2016)
* [Do not fear first class functions](https://www.youtube.com/watch?v=5buaPyJ0XeQ) [00:18:54] by **Dave Cheney** (2016)
* ["go test -race" Under the Hood](https://www.youtube.com/watch?v=5erqWdlhQLA) [00:44:13] by **Kavya Joshi** (2016)
* [Idiomatic Go Tricks](https://www.youtube.com/watch?v=yeetIgNeIkc) [00:27:56] by **Mat Ryer** (2016)
* [Inside the Map Implementation](https://www.youtube.com/watch?v=Tl7mi9QmLns) [00:26:49] by **Keith Randall** (2016)
* [Packet Capture, Analysis, and Injection with Go](https://www.youtube.com/watch?v=APDnbmTKjgM) [00:37:14] by **John Leon** (2016)
* [Program your next server in Go](https://www.youtube.com/watch?v=5bYO60-qYOI) [01:02:05] by **Sameer Ajmani** (2016)
* [The Design of the Go Assembler](https://www.youtube.com/watch?v=KINIAgRpkDA) [00:23:56] by **Rob Pike** (2016)
* [The Hidden Power of Humble Interfaces](https://www.youtube.com/watch?v=s4e-cFhT620) [00:23:47] by **Aditya Mukerjee** (2016))
## Ruby
* [What Killed Smalltalk Could Kill Ruby, Too](https://www.youtube.com/watch?v=YX3iRjKj7C0) [01:00:55] by **Robert Martin** (2009)
* [€™s 2018](https://www.youtube.com/watch?v=nVbMhLKvDF0) [00:11:53] by **Joe Leo III** (2018)€‹
* [Composition](https://www.youtube.com/watch?v=zwo7ZTHS8Wg) [00:47:55] by **James Dabbs** (2016)
* [How Are Method Calls Formed?](https://www.youtube.com/watch?v=6Dkjus07d9Y) [00:52:16] by **Aaron Patterson** (2016)
* [Metaprogramming? Not good enough!](https://www.youtube.com/watch?v=JOvBmhukWI0) [00:36:09] by **Justin Weiss** (2016)
* [Fun with the Lambda Calculus](https://www.youtube.com/watch?v=QPqoFCHpLF4) [00:48:48] by **Corey Haines** (2015)
* [How to Performance](https://www.youtube.com/watch?v=obyrJ_aJU6A) [00:30:03] by **Eileen Uchitelle** (2015)
* [Softly, softly typing](https://www.youtube.com/watch?v=XGLYHQ1BLfM) [00:44:33] by **John Cinnamond** (2015)€‹
* [Refactoring Ruby with Monads](https://www.youtube.com/watch?v=J1jYlPtkrqQ) [00:30:04] by **Tom Stuart** (2014)
* [Speed up Rails, Speed up Your Code](https://www.youtube.com/watch?v=NKs1PjkheQY) [00:41:04] by **Aaron Patterson** (2014)€‹
* [A Rubyist in Clojure-land](https://www.youtube.com/watch?v=PbeCeM344z8) [00:37:50] by **David Chelimsky** (2013)
* [Pry - The Good Parts!](https://www.youtube.com/watch?v=jDXsEzOHb2M) [00:33:33] by **Conrad Irwin** (2013)
* [REPL driven development with Pry](https://www.youtube.com/watch?v=D9j_Mf91M0I) [00:39:26] by **Conrad Irwin** (2013)
* [Ruby, threads, events ... and Flying Robots!](https://www.youtube.com/watch?v=YidL5j10jiU) [01:12:54] by **Jim Weirich** (2013)
* [That's Not Very Ruby of You](https://www.youtube.com/watch?v=OB-xFC8AN_s) [00:36:57] by **Ernie Miller** (2013)
* [You Gotta Try This](https://www.youtube.com/watch?v=ZhINjILA5yw) [00:45:12] by **Avdi Grimm** (2013)€‹
* [Make awesome command line apps with Ruby](https://www.youtube.com/watch?v=1ILEw6Qca3U) [00:28:57] by **Dave Copeland** (2012)
* [MiniTest: Write Awesome Tests](https://www.youtube.com/watch?v=6hBghQ-Ic_o) [00:32:27] by **Michael J.I. Jackson** (2012)
* [Programming With Nothing](https://www.youtube.com/watch?v=VUhlNx_-wYk) [00:40:50] by **Tom Stuart** (2012)
* [Y Not - Adventures in Functional Programming](http://www.confreaks.com/videos/1287-rubyconf2012-y-not-adventures-in-functional-programming) [00:53:22] by **Jim Weirich** (2012))
## Smalltalk
* [But Really, You Should Learn Smalltalk](https://www.youtube.com/watch?v=eGaKZBr0ga4) [00:28:05] by **Noel Rappin** (2014)
## VimL
* [Going mouseless with Vim, Tmux, and Hotkeys](https://www.youtube.com/watch?v=E-ZbrtoSuzw) [00:57:27] by **Leeren Chang** (2018)
* [More Instantly Better Vim](https://www.youtube.com/watch?v=aHm36-na4-4) [00:38:51] by **Damian Conway** (2013)
* [Vim - I Wish I Knew How To :q You](https://www.youtube.com/watch?v=X7lZ8MVGl4A) [00:41:08] by **Chris Maiden** (not really about VimL, more of a general introduction into vim) (2013)
* [Write code faster: expert-level vim](https://www.youtube.com/watch?v=SkdrYWhh-8s) [00:41:09] by **Ben Orenstein** (not really expert level) (2012)
## Distributed Systems
* [~~Everything about distributed systems is terrible~~Designing Distributed Systems with TLA+](https://www.youtube.com/watch?v=tfnldxWlOhM) [00:38:25] by **Hillel Wayne** (2018)
* [Send me your Echolocation](https://www.deconstructconf.com/2018/vicky-nguyen-send-me-your-echolocation) [00:26:06] by **Vicky Nguyen** (2018)
* [Load Balancing is Impossible](https://www.youtube.com/watch?v=gas2v1emubU) [00:36:43] by **Tyler McMullen** (2016)
* [Scaling Instagram](https://www.youtube.com/watch?v=oNA2C1vC8FQ) [00:27:13] by **Mike Krieger** (2015)
* [Coordination-Free Computations](https://www.youtube.com/watch?v=AF8fpDzfUOc) [00:46:15] by **Cristopher Meiklejohn** (really fast talker) (2015)
* [Everything Will Flow](https://www.youtube.com/watch?v=1bNOO3xxMc0) by **Zach Tellman** (2015) [A]
* [Jepsen IV: Hope Springs Eternal](https://www.youtube.com/watch?v=dE3KT7hHkKY) [00:54:33] by **Kyle Kingsbury** (2015)
* [Distributed Eventually Consistent Computations](https://www.youtube.com/watch?v=uwpakTIg9r8) [00:49:37] by **Christopher Meiklejohn** (2015)
* [Distributed Systems 101](https://www.youtube.com/watch?v=YAFGQurdJ3U) [00:45:25] by **lvh** (2015)
* [K things I know about building Resilient Reactive Systems](https://www.youtube.com/watch?v=rQIE22e0cW8) [01:00:02] by **Joe Armstrong** (2014)
* [The How and Why of Fitting Things Together](https://www.youtube.com/watch?v=ed7A7r6DBsM) [00:46:39] by **Joe Armstrong** (2013)
## Functional Programming
* [Railway oriented programming: Error handling in functional languages](https://vimeo.com/113707214) by **Scott Wlaschin** (2014)
* [The Functional Final Frontier](https://www.youtube.com/watch?v=DMtwq3QtddY) [00:27:02] by **David Nolen** (2014)
* [Functional Programming; What? Why? When? How?](https://www.youtube.com/watch?v=7Zlp9rKHGD4) [00:58:27] by **Robert C Martin** (2014)
* [Living in a Post-Functional World](https://www.infoq.com/presentations/post-functional-scala-clojure-haskell/) [00:45:46] by **Daniel Spiewak** (2013)
* [Deconstructing Functional Programming](https://www.infoq.com/presentations/functional-pros-cons/) [00:48:33] by **Gilad Bracha** (2013)
* [Functional Principles for Object Oriented Development](https://www.youtube.com/watch?v=pMGY9ViIGNU) [00:51:13] by **Jessica Kerr** (2013)
* [Don't fear the Monad](https://www.youtube.com/watch?v=ZhuHCtR3xq8) [01:07:11] by **Dr. Brian Beckman** (2012)
* [Faith, Evolution, and Programming Languages](https://www.youtube.com/watch?v=8frGknO8rIg) [01:06:54] by **Phillip Wadler** (2012)
* [Adventures in Functional Programming](https://vimeo.com/45140590) [00:50:34] by **Jim Weirich** (2012)
* [Tangible Functional Programming](https://www.youtube.com/watch?v=faJ8N0giqzw) [00:56:25] by **Conal Elliott** (2007)
* [Career Advice for Programmers](https://www.youtube.com/watch?v=LlAn452X4Lc) [00:54:18] by **Trisha Gee** (2013)
* [Patterns in Architecture](https://www.youtube.com/watch?v=98LdFA-_zfA) [01:03:35] by **Christopher Alexander** (2013)
* [Normal Considered Harmful](https://www.youtube.com/watch?v=FvmTSpJU-Xc) [01:07:26] by **Alan Kay** (2012)
* [How to Give a Great Research Talk](https://www.youtube.com/watch?v=sT_-owjKIbA) [00:58:41] by **Simon Peyton Jones** (2016)
## Security
* [DNS, SNI, TLS, HTTPS: Modern DNS & Privacy](https://www.youtube.com/watch?v=pjin3nv8jAo) [00:43:17] by **Bert Hubert** (2019)
## Software engineering
* [OOP Is Dead, Long Live Data-oriented Design](https://www.youtube.com/watch?v=yy8jQgmhbAU) [01:00:45] by **Stoyan Nikolov** (2018)
* [TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?v=EZ05e7EMOLM) [01:03:53] by **Ian Cooper** (2017)
* [You're Insufficiently Persuasive](https://www.youtube.com/watch?v=VzWLGMtXflg) [00:35:37] by **Sandi Metz** (2017)
* [Get a Whiff of This](https://www.youtube.com/watch?v=PJjHfa5yxlU) [00:38:14] by **Sandi Metz** (2016)
* [Boundaries](https://youtu.be/eOYal8elnZk) [00:30:19] by **Gary Bernhardt** (2015)
* [All the Little Things](https://www.youtube.com/watch?v=8bZh5LMaSmE) [00:38:46] by **Sandi Metz** (2014)
* [The S.O.L.I.D. Principles of Agile OO Design](https://www.youtube.com/watch?v=QHnLmvDxGTY) [01:23:35] by **Robert C. Martin** (way more interesting than it sounds) (2014)
* [The Most Important Design Guideline](https://www.youtube.com/watch?v=5tg1ONG18H8) [00:58:42] by **Scott Meyers** (2014)
* [The Mess We're In](https://www.youtube.com/watch?v=lKXe3HUG2l4) [00:45:50] by **Joe Armstrong** (2014)
* [The Not-So-Big Software Design](https://www.youtube.com/watch?v=arsK-CN5YDg) [00:47:31] by **Reginald Braithwaite** (2013)
* [A Whole New World](https://www.destroyallsoftware.com/talks/a-whole-new-world) [00:21:20] by **Gary Bernhardt** (2012)
* [Inventing on Principle](https://vimeo.com/36579366) [00:54:20] by **Bret Victor** (2012)
* [The Value Of Values](https://www.infoq.com/presentations/Value-Values/) [00:58:53] by **Rich Hickey** (2012)
* [Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc) [00:39:49] by **Rich Hickey** (2012)
* [Simplicity Matters](https://www.youtube.com/watch?v=rI8tNMsozo0) [00:36:54] by **Rich Hickey** (Simple Made Easy revisited) (2012)
* [Growing a Language](https://www.youtube.com/watch?v=_ahvzDzKdB0) [00:53:31] by **Guy Steele** (2012)
* [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy/) [01:01:26] by **Rich Hickey** (2011)
* [Real Software Engineering](https://www.youtube.com/watch?v=NP9AIUT9nos) [00:51:56] by **Glenn Vanderburg** (2010)
* [Are We There Yet?](https://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey/) [01:10:04] by **Rich Hickey** (2009)
* [SOLID Object-Oriented Design](https://www.youtube.com/watch?v=v-2yFMzxqwU) [00:47:11] by **Sandi Metz** (2009)
## System Architecture
* [The Salami Method for Cross Platform Development](https://www.youtube.com/watch?v=ZSpGNiUvXVI) [01:00:16] by **Adi Shavit** (2018)
* [Four Distributed Systems Architectural Patterns](https://www.youtube.com/watch?v=tpspO9K28PM) [00:50:00] by **Tim Berglund** (2017)
* [Mastering Chaos - A Netflix Guide to Microservice](https://www.youtube.com/watch?v=CZ3wIuvmHeM) [00:53:13] by **Josh Evans** (2017)
* [12-Factor Apps and the HashiStack](https://www.youtube.com/watch?v=NVl9cIiPF80) [00:30:39] by **Kelsey Hightower** (2016)
* [Kill "Microservices" before its too late](https://www.youtube.com/watch?v=-UKEPd2ipEk) [00:39:41] by **Chad Fowler** (2016)
* [Runtime scheduling: theory and reality](https://www.youtube.com/watch?v=8g9fG7cApbc) [00:42:11] by **Eben Freeman** (2016)
* [The Power Of UNIX](https://www.youtube.com/watch?v=7uwW20odwEk) [00:30:03] by **Dan North** (2015)
* [Speed & Scale: How to get there](https://www.youtube.com/watch?v=BeNrVl2_nyI) [01:04:51] by **Adrian Cockcroft** (2014)
* [Keeping a System Running Forever](https://www.youtube.com/watch?v=cQohRGGqevo) [00:28:06] by **Fred Hebert** (2014)
* [Narcissistic Design](https://www.youtube.com/watch?v=LEZv-kQUSi4) [00:37:14] by **Stuart Halloway** (2013)
* [Scalability at YouTube](https://youtu.be/G-lGCC4KKok?t=9m12s) [00:38:43] by **Mike Solomon** (long intro; starts at 9:12 minutes in) (2012)
