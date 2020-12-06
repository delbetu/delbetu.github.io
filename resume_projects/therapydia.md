
Therapydia
6 - meses

Description
National network of physical therapy
ReferralJet is a product used by therapists which allows them
to connect with other clinics across US and refer patients between them.


Information

Functionallity

Key contributions
* SQL performance improvements (bullet gem to bottlenecks, benchmarking, N+1 queries, lazy/eager loading, Indexing)
* Diagnose/fix page-load issues by minifying/compressing assets and join images(css-sprite).
* Rebuild/fix existing stats on dashboard
* Suggest implement an easy way for a patient to report its pain.
    * By showing a man silhouette that allows the patient to click on the parts of the body where she/he feels some pain.
* Construir un panel lateral con datos que guiaban a los dueños de las clínicas a ir utilizando el sistema

Key Technologies
* Rails
* AWS
* Mysql
* CanCan Devise
* NewRelic
* Redis
* Sidekiq


Story
(most challenging)
Nos pidieron que investigaramos los numeros de un dashboard porque no coincidian en otras partes del sistema.
Nuestra idea inicial era comenzar agregando tests para poder refactoriar y nos encontramos con que nadie sabia especificarnos como se calculaban algunas de esas metricas.
Finalmente tuvimos que inspeccionar a fondo el codigo para poder entender las formulas detras de cada metrica.
Luego construir tests e ir reemplazando las existentes una por una.
