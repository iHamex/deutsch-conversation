---
title: "Software Architecture"
level: "B2"
chapter_number: 116
---

# Software-Architektur / Software Architecture

---

## 001: Grundlagen der Software-Architektur / Fundamentals of Software Architecture

**Situation:**  
Ein Senior-Architekt erklärt einem Junior-Entwickler die Grundprinzipien der Software-Architektur.  
*A senior architect explains the fundamental principles of software architecture to a junior developer.*

### Dialog / Dialogue

**Dr. Schmidt:**  
Software-Architektur beschreibt die grundlegende Struktur eines Systems, die Entscheidungen über Komponenten, deren Beziehungen und Design-Prinzipien umfasst.  
*Software architecture describes the fundamental structure of a system, including decisions about components, their relationships, and design principles.*

**Frau Weber:**  
Welche Rolle spielt Architektur in der Softwareentwicklung?  
*What role does architecture play in software development?*

**Dr. Schmidt:**  
Architektur definiert die Grundlage für alle weiteren Entwicklungsentscheidungen und beeinflusst Wartbarkeit, Skalierbarkeit und Performance eines Systems.  
*Architecture defines the foundation for all further development decisions and influences maintainability, scalability, and performance of a system.*

**Frau Weber:**  
Welche Architekturprinzipien sind wichtig?  
*What architecture principles are important?*

**Dr. Schmidt:**  
Separation of Concerns, Single Responsibility, Loose Coupling und High Cohesion sind fundamentale Prinzipien, die zuverlässige Architekturen ermöglichen.  
*Separation of Concerns, Single Responsibility, Loose Coupling, and High Cohesion are fundamental principles that enable reliable architectures.*

**Frau Weber:**  
Wie wird eine Architektur dokumentiert?  
*How is an architecture documented?*

**Dr. Schmidt:**  
Architekturdiagramme, Entscheidungsprotokolle und Dokumentation der Komponenten und deren Interaktionen sind essentiell für das Verständnis und die Wartung.  
*Architecture diagrams, decision records, and documentation of components and their interactions are essential for understanding and maintenance.*

---

## 002: Architekturmuster / Architecture Patterns

**Situation:**  
Zwei Architekten diskutieren verschiedene Architekturmuster und deren Anwendungsfälle.  
*Two architects discuss various architecture patterns and their use cases.*

### Dialog / Dialogue

**Ing. Müller:**  
Architekturmuster bieten bewährte Lösungen für wiederkehrende Designprobleme.  
*Architecture patterns offer proven solutions for recurring design problems.*

**Herr Wagner:**  
Welche Architekturmuster sind gängig?  
*What architecture patterns are common?*

**Ing. Müller:**  
Layered Architecture, Microservices, Event-Driven Architecture und Hexagonal Architecture sind weit verbreitete Muster mit unterschiedlichen Stärken.  
*Layered Architecture, Microservices, Event-Driven Architecture, and Hexagonal Architecture are widely used patterns with different strengths.*

**Herr Wagner:**  
Wie wählt man das richtige Muster?  
*How does one choose the right pattern?*

**Ing. Müller:**  
Die Anforderungen des Systems, Skalierungsbedarf, Team-Struktur und technische Constraints sollten bei der Auswahl berücksichtigt werden.  
*System requirements, scaling needs, team structure, and technical constraints should be considered in selection.*

**Herr Wagner:**  
Können Muster kombiniert werden?  
*Can patterns be combined?*

**Ing. Müller:**  
Ja, häufig werden mehrere Muster kombiniert, um die Vorteile verschiedener Ansätze zu nutzen und spezifische Anforderungen zu erfüllen.  
*Yes, often multiple patterns are combined to leverage advantages of different approaches and meet specific requirements.*

---

## 003: Domain-Driven Design / Domain-Driven Design

**Situation:**  
Ein Domain-Experte und ein Architekt diskutieren Domain-Driven Design als Architekturansatz.  
*A domain expert and an architect discuss Domain-Driven Design as an architectural approach.*

### Dialog / Dialogue

**Prof. Klein:**  
Domain-Driven Design fokussiert auf die Modellierung der Geschäftsdomäne als Kern der Architektur.  
*Domain-Driven Design focuses on modeling the business domain as the core of architecture.*

**Dr. Becker:**  
Welche Konzepte sind zentral für DDD?  
*What concepts are central to DDD?*

**Prof. Klein:**  
Bounded Contexts, Entities, Value Objects, Aggregates und Domain Services sind fundamentale Konzepte, die die Domäne strukturieren.  
*Bounded Contexts, Entities, Value Objects, Aggregates, and Domain Services are fundamental concepts that structure the domain.*

**Dr. Becker:**  
Wie werden Bounded Contexts definiert?  
*How are Bounded Contexts defined?*

**Prof. Klein:**  
Bounded Contexts werden durch klare Grenzen definiert, innerhalb derer ein konsistentes Domänenmodell existiert, während zwischen Kontexten explizite Schnittstellen definiert werden.  
*Bounded Contexts are defined by clear boundaries within which a consistent domain model exists, while explicit interfaces are defined between contexts.*

**Dr. Becker:**  
Welche Vorteile bietet DDD?  
*What advantages does DDD offer?*

**Prof. Klein:**  
Besseres Verständnis der Geschäftslogik, klarere Architektur-Grenzen und bessere Kommunikation zwischen technischen und fachlichen Teams sind die Hauptvorteile.  
*Better understanding of business logic, clearer architecture boundaries, and better communication between technical and business teams are the main advantages.*

---

## 004: Clean Architecture / Clean Architecture

**Situation:**  
Ein Architekt erklärt Clean Architecture-Prinzipien einem Entwicklungsteam.  
*An architect explains Clean Architecture principles to a development team.*

### Dialog / Dialogue

**Ing. Fischer:**  
Clean Architecture organisiert Code in konzentrischen Schichten mit klaren Abhängigkeitsregeln.  
*Clean Architecture organizes code in concentric layers with clear dependency rules.*

**Frau Schulz:**  
Welche Schichten gibt es?  
*What layers exist?*

**Ing. Fischer:**  
Die Domänenschicht im Zentrum, gefolgt von Anwendungsschicht, Infrastrukturschicht und Präsentationsschicht, wobei Abhängigkeiten nach innen zeigen.  
*The domain layer at the center, followed by application layer, infrastructure layer, and presentation layer, with dependencies pointing inward.*

**Frau Schulz:**  
Welche Vorteile bietet diese Struktur?  
*What advantages does this structure offer?*

**Ing. Fischer:**  
Unabhängigkeit von Frameworks, Testbarkeit und Unabhängigkeit der Geschäftslogik von technischen Details sind die Hauptvorteile.  
*Independence from frameworks, testability, and independence of business logic from technical details are the main advantages.*

**Frau Schulz:**  
Wie wird Clean Architecture implementiert?  
*How is Clean Architecture implemented?*

**Ing. Fischer:**  
Durch strikte Einhaltung der Abhängigkeitsregeln, Verwendung von Interfaces für externe Abhängigkeiten und Fokussierung auf die Domänenlogik im Zentrum.  
*Through strict adherence to dependency rules, use of interfaces for external dependencies, and focus on domain logic at the center.*

---

## 005: Event-Driven Architecture / Event-Driven Architecture

**Situation:**  
Zwei Systemarchitekten diskutieren Event-Driven Architecture für verteilte Systeme.  
*Two systems architects discuss Event-Driven Architecture for distributed systems.*

### Dialog / Dialogue

**Dr. Koch:**  
Event-Driven Architecture verwendet Events als primären Kommunikationsmechanismus zwischen Komponenten.  
*Event-Driven Architecture uses events as the primary communication mechanism between components.*

**Ing. Hoffmann:**  
Welche Vorteile bietet diese Architektur?  
*What advantages does this architecture offer?*

**Dr. Koch:**  
Lose Kopplung, bessere Skalierbarkeit, Flexibilität bei Änderungen und die Möglichkeit, neue Komponenten hinzuzufügen, ohne bestehende zu ändern, sind die Hauptvorteile.  
*Loose coupling, better scalability, flexibility for changes, and the ability to add new components without modifying existing ones are the main advantages.*

**Ing. Hoffmann:**  
Wie werden Events verarbeitet?  
*How are events processed?*

**Dr. Koch:**  
Event-Broker oder Message Queues empfangen Events von Publishern und verteilen sie an Subscriber, die asynchron auf Events reagieren können.  
*Event brokers or message queues receive events from publishers and distribute them to subscribers, who can react asynchronously to events.*

**Ing. Hoffmann:**  
Welche Herausforderungen gibt es?  
*What challenges exist?*

**Dr. Koch:**  
Event-Reihenfolge, Duplikate, die Komplexität des Debugging und die Sicherstellung der Event-Verarbeitung sind wichtige Herausforderungen.  
*Event ordering, duplicates, debugging complexity, and ensuring event processing are important challenges.*

---

## 006: Hexagonal Architecture / Hexagonal Architecture

**Situation:**  
Ein Architekt erklärt Hexagonal Architecture (Ports and Adapters) einem Entwicklungsteam.  
*An architect explains Hexagonal Architecture (Ports and Adapters) to a development team.*

### Dialog / Dialogue

**Ing. Lehmann:**  
Hexagonal Architecture isoliert die Kernanwendung von externen Abhängigkeiten durch Ports und Adapters.  
*Hexagonal Architecture isolates the core application from external dependencies through ports and adapters.*

**Herr Richter:**  
Wie funktioniert dieses Muster?  
*How does this pattern work?*

**Ing. Lehmann:**  
Die Kernanwendung definiert Ports als Interfaces, während Adapters die Verbindung zu externen Systemen wie Datenbanken oder APIs implementieren.  
*The core application defines ports as interfaces, while adapters implement connections to external systems like databases or APIs.*

**Herr Richter:**  
Welche Vorteile bietet Hexagonal Architecture?  
*What advantages does Hexagonal Architecture offer?*

**Ing. Lehmann:**  
Testbarkeit durch Mocking von Adapters, Unabhängigkeit von externen Systemen und Flexibilität bei der Auswahl von Technologien sind die Hauptvorteile.  
*Testability through mocking adapters, independence from external systems, and flexibility in technology selection are the main advantages.*

**Herr Richter:**  
Wie wird es implementiert?  
*How is it implemented?*

**Ing. Lehmann:**  
Durch Definition klarer Port-Interfaces, Implementierung von Adaptern für jede externe Abhängigkeit und Sicherstellung, dass die Kernanwendung nur Ports verwendet.  
*Through defining clear port interfaces, implementing adapters for each external dependency, and ensuring the core application only uses ports.*

---

## 007: CQRS und Event Sourcing / CQRS and Event Sourcing

**Situation:**  
Ein Architekt erklärt CQRS und Event Sourcing als Architekturmuster.  
*An architect explains CQRS and Event Sourcing as architecture patterns.*

### Dialog / Dialogue

**Dr. Neumann:**  
CQRS trennt Lese- und Schreiboperationen in separate Modelle, um optimale Performance für beide zu ermöglichen.  
*CQRS separates read and write operations into separate models to enable optimal performance for both.*

**Frau Zimmermann:**  
Welche Vorteile bietet CQRS?  
*What advantages does CQRS offer?*

**Dr. Neumann:**  
Optimierte Lese- und Schreibmodelle, bessere Skalierbarkeit und die Möglichkeit, verschiedene Datenstrukturen für Lese- und Schreiboperationen zu verwenden, sind die Hauptvorteile.  
*Optimized read and write models, better scalability, and the ability to use different data structures for read and write operations are the main advantages.*

**Frau Zimmermann:**  
Was ist Event Sourcing?  
*What is Event Sourcing?*

**Dr. Neumann:**  
Event Sourcing speichert alle Änderungen als Events, anstatt nur den aktuellen Zustand, was vollständige Historie und Replay-Möglichkeiten bietet.  
*Event Sourcing stores all changes as events, rather than just the current state, which offers complete history and replay capabilities.*

**Frau Zimmermann:**  
Wie arbeiten CQRS und Event Sourcing zusammen?  
*How do CQRS and Event Sourcing work together?*

**Dr. Neumann:**  
Event Sourcing kann als Schreibmodell in CQRS verwendet werden, während Read Models aus Events abgeleitet werden, um optimale Lese-Performance zu bieten.  
*Event Sourcing can be used as the write model in CQRS, while read models are derived from events to offer optimal read performance.*

---

## 008: Architektur-Entscheidungen dokumentieren / Documenting Architecture Decisions

**Situation:**  
Ein Architekt diskutiert mit einem Teamleiter die Dokumentation von Architektur-Entscheidungen.  
*An architect discusses documenting architecture decisions with a team leader.*

### Dialog / Dialogue

**Ing. Bauer:**  
Die Dokumentation von Architektur-Entscheidungen ist entscheidend für das Verständnis und die Wartung von Systemen.  
*Documenting architecture decisions is crucial for understanding and maintaining systems.*

**Herr Schneider:**  
Welche Informationen sollten dokumentiert werden?  
*What information should be documented?*

**Ing. Bauer:**  
Der Kontext der Entscheidung, die getroffene Entscheidung, die Begründung und die Konsequenzen sollten klar dokumentiert werden.  
*The context of the decision, the decision made, the rationale, and the consequences should be clearly documented.*

**Herr Schneider:**  
Welche Formate werden verwendet?  
*What formats are used?*

**Ing. Bauer:**  
ADR (Architecture Decision Records) sind ein gängiges Format, das Entscheidungen strukturiert dokumentiert und versioniert werden kann.  
*ADR (Architecture Decision Records) are a common format that documents decisions structured and can be versioned.*

**Herr Schneider:**  
Wie wird die Dokumentation aktuell gehalten?  
*How is documentation kept current?*

**Ing. Bauer:**  
Durch regelmäßige Reviews, Integration in den Entwicklungsprozess und die Verpflichtung, Entscheidungen zu dokumentieren, wenn sie getroffen werden.  
*Through regular reviews, integration into the development process, and commitment to document decisions when they are made.*

---

## 009: Architektur-Refactoring / Architecture Refactoring

**Situation:**  
Ein Senior-Architekt diskutiert Strategien für Architektur-Refactoring mit einem Entwicklungsteam.  
*A senior architect discusses strategies for architecture refactoring with a development team.*

### Dialog / Dialogue

**Dr. Berg:**  
Architektur-Refactoring ist notwendig, wenn eine bestehende Architektur nicht mehr den Anforderungen entspricht.  
*Architecture refactoring is necessary when an existing architecture no longer meets requirements.*

**Frau Huber:**  
Wann sollte Architektur refactored werden?  
*When should architecture be refactored?*

**Dr. Berg:**  
Wenn Wartbarkeit leidet, Performance-Probleme auftreten, Skalierung nicht möglich ist oder neue Anforderungen nicht erfüllt werden können, sollte Refactoring erwogen werden.  
*When maintainability suffers, performance problems occur, scaling is not possible, or new requirements cannot be met, refactoring should be considered.*

**Frau Huber:**  
Wie wird Architektur-Refactoring durchgeführt?  
*How is architecture refactoring performed?*

**Dr. Berg:**  
Schrittweise Migration, Strangler-Fig-Pattern und parallele Ausführung von alter und neuer Architektur ermöglichen sicheres Refactoring ohne Systemausfälle.  
*Gradual migration, Strangler Fig pattern, and parallel execution of old and new architecture enable safe refactoring without system failures.*

**Frau Huber:**  
Welche Risiken gibt es?  
*What risks exist?*

**Dr. Berg:**  
Unterbrechungen des Betriebs, Dateninkonsistenzen und erhöhte Komplexität während der Übergangsphase sind wichtige Risiken, die durch sorgfältige Planung minimiert werden können.  
*Service interruptions, data inconsistencies, and increased complexity during the transition phase are important risks that can be minimized through careful planning.*

---

## 010: Architektur-Bewertung / Architecture Evaluation

**Situation:**  
Ein Architektur-Experte diskutiert Methoden zur Bewertung von Software-Architekturen.  
*An architecture expert discusses methods for evaluating software architectures.*

### Dialog / Dialogue

**Prof. Wolf:**  
Die Bewertung von Architekturen hilft, Probleme frühzeitig zu identifizieren und Verbesserungen zu planen.  
*Evaluating architectures helps identify problems early and plan improvements.*

**Herr Stein:**  
Welche Bewertungsmethoden gibt es?  
*What evaluation methods exist?*

**Prof. Wolf:**  
ATAM (Architecture Tradeoff Analysis Method), SAAM (Software Architecture Analysis Method) und Architektur-Reviews sind gängige Methoden zur systematischen Bewertung.  
*ATAM (Architecture Tradeoff Analysis Method), SAAM (Software Architecture Analysis Method), and architecture reviews are common methods for systematic evaluation.*

**Herr Stein:**  
Welche Qualitätsattribute werden bewertet?  
*What quality attributes are evaluated?*

**Prof. Wolf:**  
Performance, Sicherheit, Wartbarkeit, Skalierbarkeit, Zuverlässigkeit und Testbarkeit sind wichtige Qualitätsattribute, die bewertet werden sollten.  
*Performance, security, maintainability, scalability, reliability, and testability are important quality attributes that should be evaluated.*

**Herr Stein:**  
Wie werden Bewertungsergebnisse verwendet?  
*How are evaluation results used?*

**Prof. Wolf:**  
Ergebnisse helfen bei der Priorisierung von Verbesserungen, der Identifikation von Risiken und der Planung zukünftiger Architektur-Entwicklungen.  
*Results help prioritize improvements, identify risks, and plan future architecture developments.*

---

## Grammatik / Grammar

### Konjunktiv II für hypothetische Szenarien / Konjunktiv II for Hypothetical Scenarios

**English:** Konjunktiv II is extensively used in B2-level discussions about software architecture to express recommendations and hypothetical situations.

**Examples from conversations:**

- **Architektur sollte Wartbarkeit ermöglichen.** - Architecture should enable maintainability.
- **Durch DDD könnten Domänen besser modelliert werden.** - Through DDD, domains could be better modeled.
- **Muster sollten basierend auf Anforderungen gewählt werden.** - Patterns should be chosen based on requirements.
- **Refactoring sollte schrittweise erfolgen.** - Refactoring should occur gradually.

### Passiv für technische Prozesse / Passive Voice for Technical Processes

**English:** The passive voice is frequently used when discussing technical processes and system functions in software architecture.

**Examples from conversations:**

- **Events werden von Publishern gesendet.** - Events are sent by publishers.
- **Architektur-Entscheidungen werden dokumentiert.** - Architecture decisions are documented.
- **Komponenten werden durch Ports isoliert.** - Components are isolated through ports.
- **Qualitätsattribute werden bewertet.** - Quality attributes are evaluated.

### Komplexe Nebensätze mit "indem", "während" und "obwohl" / Complex Subordinate Clauses

**English:** Complex subordinate clauses are essential for expressing nuanced relationships and methods in advanced discussions about software architecture.

**Examples from conversations:**

- **Wir verbessern Testbarkeit, indem wir Ports verwenden.** - We improve testability by using ports.
- **Während Layered Architecture einfach ist, bietet Microservices bessere Skalierung.** - While Layered Architecture is simple, Microservices offers better scaling.
- **Obwohl Event-Driven Architecture Vorteile bietet, gibt es Herausforderungen.** - Although Event-Driven Architecture offers advantages, there are challenges.
- **Wir isolieren Komponenten, indem wir Adapter verwenden.** - We isolate components by using adapters.

### Genitiv bei technischen Beziehungen / Genitive for Technical Relationships

**English:** The genitive case is used to express relationships between technical concepts and architecture components.

**Examples from conversations:**

- **Die Bedeutung von Architekturmustern für Systemdesign ist unbestritten.** - The importance of architecture patterns for system design is undisputed.
- **Die Vorteile der Clean Architecture sind vielfältig.** - The advantages of Clean Architecture are diverse.
- **Die Herausforderungen der Event-Driven Architecture sind komplex.** - The challenges of Event-Driven Architecture are complex.
- **Die Qualität der Architektur beeinflusst die Wartbarkeit.** - The quality of architecture influences maintainability.
