---
title: "Continuous Integration"
level: "B2"
chapter_number: 115
---

# Continuous Integration / Continuous Integration

---

## 001: Grundlagen von Continuous Integration / Fundamentals of Continuous Integration

**Situation:**  
Ein CI-Ingenieur erklärt einem neuen Entwickler die Grundprinzipien von Continuous Integration.  
*A CI engineer explains the fundamental principles of Continuous Integration to a new developer.*

### Dialog / Dialogue

**Ing. Weber:**  
Continuous Integration ist eine Entwicklungspraxis, bei der Entwickler ihre Änderungen häufig in ein gemeinsames Repository integrieren, wo automatische Builds und Tests ausgeführt werden.  
*Continuous Integration is a development practice where developers frequently integrate their changes into a shared repository, where automatic builds and tests are executed.*

**Frau Meyer:**  
Welche Hauptziele verfolgt CI?  
*What main goals does CI pursue?*

**Ing. Weber:**  
Frühe Fehlererkennung, schnellere Feedback-Zyklen und die Reduzierung von Integrationsproblemen sind die Hauptziele.  
*Early error detection, faster feedback cycles, and reduction of integration problems are the main goals.*

**Frau Meyer:**  
Wie funktioniert CI in der Praxis?  
*How does CI work in practice?*

**Ing. Weber:**  
Bei jedem Commit wird automatisch ein Build erstellt, Tests werden ausgeführt, und bei Fehlern erhalten Entwickler sofortiges Feedback.  
*On each commit, a build is automatically created, tests are executed, and on errors, developers receive immediate feedback.*

**Frau Meyer:**  
Welche Vorteile bietet CI?  
*What advantages does CI offer?*

**Ing. Weber:**  
Reduzierte Integrationsprobleme, höhere Codequalität und schnellere Release-Zyklen sind die Hauptvorteile.  
*Reduced integration problems, higher code quality, and faster release cycles are the main advantages.*

---

## 002: CI-Pipeline-Struktur / CI Pipeline Structure

**Situation:**  
Zwei Entwickler diskutieren die optimale Struktur einer CI-Pipeline.  
*Two developers discuss the optimal structure of a CI pipeline.*

### Dialog / Dialogue

**Dr. Schmidt:**  
Eine gut strukturierte CI-Pipeline sollte verschiedene Phasen umfassen, die nacheinander ausgeführt werden.  
*A well-structured CI pipeline should include various phases that are executed sequentially.*

**Herr Müller:**  
Welche Phasen sollte eine CI-Pipeline enthalten?  
*What phases should a CI pipeline include?*

**Dr. Schmidt:**  
Code-Checks, Dependency-Überprüfungen, Kompilierung, Unit-Tests, Integrationstests und Build-Artefakt-Erstellung sind typische Phasen.  
*Code checks, dependency verification, compilation, unit tests, integration tests, and build artifact creation are typical phases.*

**Herr Müller:**  
Wie sollte die Pipeline bei Fehlern reagieren?  
*How should the pipeline react to errors?*

**Dr. Schmidt:**  
Die Pipeline sollte bei jedem Fehler stoppen und detaillierte Fehlermeldungen bereitstellen, damit Entwickler Probleme schnell identifizieren können.  
*The pipeline should stop on any error and provide detailed error messages so developers can quickly identify problems.*

**Herr Müller:**  
Welche Best Practices gibt es?  
*What best practices exist?*

**Dr. Schmidt:**  
Schnelle Ausführungszeiten, parallele Ausführung von Tests und die Möglichkeit, Pipelines lokal zu reproduzieren sind wichtige Best Practices.  
*Fast execution times, parallel execution of tests, and the ability to reproduce pipelines locally are important best practices.*

---

## 003: Automatisierte Tests in CI / Automated Tests in CI

**Situation:**  
Ein QA-Ingenieur und ein Entwickler diskutieren Teststrategien für CI-Pipelines.  
*A QA engineer and a developer discuss test strategies for CI pipelines.*

### Dialog / Dialogue

**Frau Wagner:**  
Automatisierte Tests sind das Rückgrat einer effektiven CI-Pipeline.  
*Automated tests are the backbone of an effective CI pipeline.*

**Herr Klein:**  
Welche Testarten sollten in CI integriert werden?  
*What types of tests should be integrated into CI?*

**Frau Wagner:**  
Unit-Tests, Integrationstests, Code-Quality-Checks und manchmal auch End-to-End-Tests sollten Teil der CI-Pipeline sein.  
*Unit tests, integration tests, code quality checks, and sometimes end-to-end tests should be part of the CI pipeline.*

**Herr Klein:**  
Wie wird die Testausführungszeit optimiert?  
*How is test execution time optimized?*

**Frau Wagner:**  
Durch parallele Ausführung von Tests, Test-Selektion basierend auf geänderten Dateien und die Verwendung von Test-Caching können Ausführungszeiten reduziert werden.  
*Through parallel execution of tests, test selection based on changed files, and using test caching, execution times can be reduced.*

**Herr Klein:**  
Welche Herausforderungen gibt es?  
*What challenges exist?*

**Frau Wagner:**  
Flackernde Tests, die Verwaltung von Testdaten und die Sicherstellung konsistenter Testumgebungen sind wichtige Herausforderungen.  
*Flaky tests, managing test data, and ensuring consistent test environments are important challenges.*

---

## 004: CI-Tools und Plattformen / CI Tools and Platforms

**Situation:**  
Ein DevOps-Ingenieur erklärt einem Team verschiedene CI-Tools und deren Vor- und Nachteile.  
*A DevOps engineer explains various CI tools and their advantages and disadvantages to a team.*

### Dialog / Dialogue

**Ing. Becker:**  
Es gibt viele CI-Tools, die jeweils unterschiedliche Stärken haben.  
*There are many CI tools, each with different strengths.*

**Frau Fischer:**  
Welche CI-Tools sind gängig?  
*What CI tools are common?*

**Ing. Becker:**  
Jenkins, GitLab CI, GitHub Actions, CircleCI und Travis CI sind weit verbreitete CI-Plattformen mit unterschiedlichen Ansätzen.  
*Jenkins, GitLab CI, GitHub Actions, CircleCI, and Travis CI are widely used CI platforms with different approaches.*

**Frau Fischer:**  
Wie wählt man das richtige Tool?  
*How does one choose the right tool?*

**Ing. Becker:**  
Faktoren wie Integration mit bestehenden Tools, Skalierbarkeit, Kosten und die Lernkurve sollten bei der Auswahl berücksichtigt werden.  
*Factors such as integration with existing tools, scalability, costs, and learning curve should be considered in selection.*

**Frau Fischer:**  
Welche Unterschiede gibt es zwischen den Tools?  
*What differences exist between the tools?*

**Ing. Becker:**  
Einige Tools sind selbst gehostet, während andere Cloud-basiert sind. Die Konfigurationsansätze variieren zwischen YAML-basierten und UI-basierten Konfigurationen.  
*Some tools are self-hosted, while others are cloud-based. Configuration approaches vary between YAML-based and UI-based configurations.*

---

## 005: Branching-Strategien und CI / Branching Strategies and CI

**Situation:**  
Ein Entwickler und ein Architekt diskutieren, wie Branching-Strategien mit CI zusammenarbeiten.  
*A developer and an architect discuss how branching strategies work with CI.*

### Dialog / Dialogue

**Herr Schulz:**  
Die Branching-Strategie beeinflusst erheblich, wie CI-Pipelines konfiguriert werden.  
*The branching strategy significantly influences how CI pipelines are configured.*

**Frau Koch:**  
Welche Branching-Strategien gibt es?  
*What branching strategies exist?*

**Herr Schulz:**  
Git Flow, GitHub Flow und Trunk-Based Development sind gängige Strategien, die jeweils unterschiedliche CI-Anforderungen haben.  
*Git Flow, GitHub Flow, and Trunk-Based Development are common strategies, each with different CI requirements.*

**Frau Koch:**  
Wie funktioniert CI mit verschiedenen Branches?  
*How does CI work with different branches?*

**Herr Schulz:**  
CI-Pipelines können so konfiguriert werden, dass sie auf verschiedenen Branches unterschiedliche Tests ausführen, wobei Pull-Requests typischerweise vollständige Test-Suites auslösen.  
*CI pipelines can be configured to run different tests on different branches, with pull requests typically triggering full test suites.*

**Frau Koch:**  
Welche Best Practices gibt es?  
*What best practices exist?*

**Herr Schulz:**  
Der Main-Branch sollte immer in einem deploybaren Zustand sein, und alle Änderungen sollten durch CI validiert werden, bevor sie gemergt werden.  
*The main branch should always be in a deployable state, and all changes should be validated through CI before being merged.*

---

## 006: Build-Artefakte und Artefakt-Management / Build Artifacts and Artifact Management

**Situation:**  
Ein Build-Ingenieur erklärt einem Entwickler das Management von Build-Artefakten in CI.  
*A build engineer explains the management of build artifacts in CI to a developer.*

### Dialog / Dialogue

**Ing. Hoffmann:**  
Build-Artefakte sind die produzierten Dateien, die aus CI-Builds resultieren und für Deployment verwendet werden.  
*Build artifacts are the produced files that result from CI builds and are used for deployment.*

**Herr Lehmann:**  
Welche Arten von Artefakten werden produziert?  
*What types of artifacts are produced?*

**Ing. Hoffmann:**  
Kompilierte Binärdateien, Docker-Images, Dokumentation, Test-Berichte und Deployment-Pakete sind typische Artefakte.  
*Compiled binaries, Docker images, documentation, test reports, and deployment packages are typical artifacts.*

**Herr Lehmann:**  
Wie werden Artefakte verwaltet?  
*How are artifacts managed?*

**Ing. Hoffmann:**  
Artefakt-Repositorys wie Nexus oder Artifactory speichern Artefakte versioniert und ermöglichen deren Verteilung an verschiedene Umgebungen.  
*Artifact repositories like Nexus or Artifactory store artifacts versioned and enable their distribution to various environments.*

**Herr Lehmann:**  
Welche Best Practices gibt es?  
*What best practices exist?*

**Ing. Hoffmann:**  
Artefakte sollten versioniert, signiert und nur für eine begrenzte Zeit gespeichert werden, um Speicherplatz zu sparen.  
*Artifacts should be versioned, signed, and stored only for a limited time to save storage space.*

---

## 007: Fehlerbehandlung und Notifications / Error Handling and Notifications

**Situation:**  
Ein CI-Ingenieur diskutiert mit einem Teamleiter Strategien für Fehlerbehandlung und Benachrichtigungen in CI.  
*A CI engineer discusses error handling and notification strategies in CI with a team leader.*

### Dialog / Dialogue

**Dr. Richter:**  
Effektive Fehlerbehandlung und Benachrichtigungen sind entscheidend, damit Teams schnell auf CI-Probleme reagieren können.  
*Effective error handling and notifications are crucial so teams can quickly respond to CI problems.*

**Frau Neumann:**  
Welche Arten von Benachrichtigungen sollten gesendet werden?  
*What types of notifications should be sent?*

**Dr. Richter:**  
Benachrichtigungen sollten bei Build-Fehlern, Test-Fehlern und erfolgreichen Deployments gesendet werden, wobei die Kanäle je nach Dringlichkeit variieren können.  
*Notifications should be sent on build failures, test failures, and successful deployments, with channels varying depending on urgency.*

**Frau Neumann:**  
Wie werden Fehler kategorisiert?  
*How are errors categorized?*

**Dr. Richter:**  
Fehler können nach Typ kategorisiert werden - Kompilierungsfehler, Test-Fehler oder Infrastruktur-Probleme - um angemessene Reaktionen zu ermöglichen.  
*Errors can be categorized by type - compilation errors, test errors, or infrastructure problems - to enable appropriate responses.*

**Frau Neumann:**  
Welche Tools werden für Benachrichtigungen verwendet?  
*What tools are used for notifications?*

**Dr. Richter:**  
Slack, Microsoft Teams, E-Mail und ChatOps-Tools werden häufig verwendet, um Teams über CI-Status zu informieren.  
*Slack, Microsoft Teams, email, and ChatOps tools are frequently used to inform teams about CI status.*

---

## 008: CI für verschiedene Technologien / CI for Different Technologies

**Situation:**  
Ein Entwickler fragt einen CI-Experten nach CI-Konfigurationen für verschiedene Programmiersprachen.  
*A developer asks a CI expert about CI configurations for different programming languages.*

### Dialog / Dialogue

**Ing. Zimmermann:**  
Verschiedene Technologien erfordern unterschiedliche CI-Konfigurationen und Build-Prozesse.  
*Different technologies require different CI configurations and build processes.*

**Herr Bauer:**  
Wie unterscheiden sich CI-Pipelines für verschiedene Sprachen?  
*How do CI pipelines differ for different languages?*

**Ing. Zimmermann:**  
Die Build-Tools, Test-Frameworks und Dependency-Manager variieren je nach Sprache, was unterschiedliche Pipeline-Konfigurationen erfordert.  
*Build tools, test frameworks, and dependency managers vary by language, which requires different pipeline configurations.*

**Herr Bauer:**  
Welche Besonderheiten gibt es bei verschiedenen Sprachen?  
*What special features exist for different languages?*

**Ing. Zimmermann:**  
JavaScript-Projekte verwenden npm oder yarn, Java-Projekte Maven oder Gradle, während Python-Projekte pip und pytest verwenden.  
*JavaScript projects use npm or yarn, Java projects use Maven or Gradle, while Python projects use pip and pytest.*

**Herr Bauer:**  
Wie werden Multi-Sprachen-Projekte gehandhabt?  
*How are multi-language projects handled?*

**Ing. Zimmermann:**  
CI-Pipelines können mehrere Build-Schritte für verschiedene Sprachen enthalten, wobei Artefakte zwischen Schritten geteilt werden können.  
*CI pipelines can include multiple build steps for different languages, with artifacts being shareable between steps.*

---

## 009: Performance-Optimierung von CI / CI Performance Optimization

**Situation:**  
Ein Performance-Experte diskutiert mit einem CI-Ingenieur Strategien zur Optimierung der CI-Performance.  
*A performance expert discusses strategies for optimizing CI performance with a CI engineer.*

### Dialog / Dialogue

**Dr. Schneider:**  
Die Optimierung der CI-Performance ist entscheidend, um schnelles Feedback zu ermöglichen und Ressourcen effizient zu nutzen.  
*Optimizing CI performance is crucial to enable fast feedback and use resources efficiently.*

**Ing. Berg:**  
Welche Faktoren beeinflussen die CI-Performance?  
*What factors influence CI performance?*

**Dr. Schneider:**  
Build-Zeiten, Test-Ausführungszeiten, Netzwerk-Latenz und die Verfügbarkeit von Build-Agents sind wichtige Faktoren.  
*Build times, test execution times, network latency, and availability of build agents are important factors.*

**Ing. Berg:**  
Wie werden Build-Zeiten reduziert?  
*How are build times reduced?*

**Dr. Schneider:**  
Durch Caching von Dependencies, parallele Ausführung von Build-Schritten, inkrementelle Builds und die Verwendung von Build-Caches können Zeiten reduziert werden.  
*Through caching dependencies, parallel execution of build steps, incremental builds, and using build caches, times can be reduced.*

**Ing. Berg:**  
Welche Herausforderungen gibt es?  
*What challenges exist?*

**Dr. Schneider:**  
Die Balance zwischen Build-Geschwindigkeit und Zuverlässigkeit, die Verwaltung von Caches und die Skalierung von Build-Infrastruktur sind wichtige Herausforderungen.  
*The balance between build speed and reliability, managing caches, and scaling build infrastructure are important challenges.*

---

## 010: CI-Metriken und kontinuierliche Verbesserung / CI Metrics and Continuous Improvement

**Situation:**  
Ein Engineering-Manager diskutiert mit einem CI-Lead Metriken zur Bewertung der CI-Effektivität.  
*An engineering manager discusses metrics for evaluating CI effectiveness with a CI lead.*

### Dialog / Dialogue

**Herr Huber:**  
Die Messung von CI-Metriken ist entscheidend, um Verbesserungsmöglichkeiten zu identifizieren.  
*Measuring CI metrics is crucial to identify improvement opportunities.*

**Frau Wolf:**  
Welche Metriken sind wichtig?  
*What metrics are important?*

**Herr Huber:**  
Build-Dauer, Build-Erfolgsrate, Test-Abdeckung, Time-to-Feedback und die Anzahl der gebrochenen Builds sind wichtige Metriken.  
*Build duration, build success rate, test coverage, time-to-feedback, and number of broken builds are important metrics.*

**Frau Wolf:**  
Wie werden diese Metriken verbessert?  
*How are these metrics improved?*

**Herr Huber:**  
Durch kontinuierliche Optimierung der Pipelines, Investitionen in Test-Automatisierung und die Förderung einer Kultur der Qualität können Metriken verbessert werden.  
*Through continuous optimization of pipelines, investment in test automation, and fostering a culture of quality, metrics can be improved.*

**Frau Wolf:**  
Welche Fehler sollten vermieden werden?  
*What mistakes should be avoided?*

**Herr Huber:**  
Die Fokussierung nur auf Geschwindigkeit ohne Qualität, das Ignorieren flackernder Tests und unzureichende Monitoring-Systeme sind häufige Fehler.  
*Focusing only on speed without quality, ignoring flaky tests, and insufficient monitoring systems are common mistakes.*

---

## Grammatik / Grammar

### Konjunktiv II für Empfehlungen / Konjunktiv II for Recommendations

**English:** Konjunktiv II is extensively used in B2-level discussions about Continuous Integration to express recommendations and hypothetical situations.

**Examples from conversations:**

- **Die Pipeline sollte bei jedem Fehler stoppen.** - The pipeline should stop on any error.
- **Artefakte sollten versioniert werden.** - Artifacts should be versioned.
- **Der Main-Branch sollte immer deploybar sein.** - The main branch should always be deployable.
- **Durch Caching könnten Zeiten reduziert werden.** - Through caching, times could be reduced.

### Passiv für technische Prozesse / Passive Voice for Technical Processes

**English:** The passive voice is frequently used when discussing technical processes and system functions in CI.

**Examples from conversations:**

- **Änderungen werden automatisch integriert.** - Changes are automatically integrated.
- **Tests werden ausgeführt.** - Tests are executed.
- **Artefakte werden versioniert gespeichert.** - Artifacts are stored versioned.
- **Benachrichtigungen werden bei Fehlern gesendet.** - Notifications are sent on errors.

### Komplexe Nebensätze mit "indem", "während" und "obwohl" / Complex Subordinate Clauses

**English:** Complex subordinate clauses are essential for expressing nuanced relationships and methods in advanced discussions about CI.

**Examples from conversations:**

- **Wir verbessern Performance, indem wir Caching verwenden.** - We improve performance by using caching.
- **Während Unit-Tests schnell sind, dauern Integrationstests länger.** - While unit tests are fast, integration tests take longer.
- **Obwohl CI Vorteile bietet, gibt es Herausforderungen.** - Although CI offers advantages, there are challenges.
- **Wir reduzieren Zeiten, indem wir parallele Ausführung verwenden.** - We reduce times by using parallel execution.

### Genitiv bei technischen Beziehungen / Genitive for Technical Relationships

**English:** The genitive case is used to express relationships between technical concepts and CI practices.

**Examples from conversations:**

- **Die Bedeutung von automatisierten Tests für CI ist unbestritten.** - The importance of automated tests for CI is undisputed.
- **Die Vorteile der CI-Pipeline-Optimierung sind vielfältig.** - The advantages of CI pipeline optimization are diverse.
- **Die Herausforderungen der Build-Performance sind komplex.** - The challenges of build performance are complex.
- **Die Metriken der CI-Effektivität werden kontinuierlich gemessen.** - The metrics of CI effectiveness are continuously measured.
