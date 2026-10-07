# Project content evidence and follow-up plan

Reviewed 8 October 2026. The source applications were inspected read-only; changes are confined to the portfolio.

## Still Discount

Sources: `/home/pavan/Still Discount/api`, `scheduler`, `sd-frontend`, and `/home/pavan/Pictures/Screenshot from 2026-10-08 00-45-40.png`.

- GA4 screenshot: 270K active users, 268K new users, 146K new users from organic social. Period: **1 December 2021–31 March 2026**. These are rounded report values, not monthly-active figures, enrollments or verified unique people across devices.
- `sd-frontend/package.json`, course actions and services: Next.js/React/TypeScript frontend, course discovery, account flows and pagination.
- `api/src/modules/courses/routes/course.routes.ts`: search/filter endpoints, input validation, authentication and operation-specific rate limits.
- `api/src/modules/core/services/cache.service.ts`: Redis cache service with optional TTL. Separate in-memory middleware also exists; do not claim every course request uses Redis.
- `api/src/modules/core/services/databases/clickhouse.service.ts`: ClickHouse infrastructure. Dependency presence alone does not establish production usage volume.
- `scheduler/src/core/scheduler.ts`: node-cron lifecycle, registration, execution and job statistics. Jobs are wrapped in error handling; retry utilities exist but are not part of the default wrapper, so the page does not claim automatic retries for every job.
- `scheduler/src/domains/courses/jobs/`: import, poster and publishing jobs. The architecture diagram is a conceptual flow, not a literal deployment topology.
- 185K enrollments, 40% page-load reduction and 90% less manual work came from the supplied résumé. The screenshot does not validate those claims. Enrollment is explicitly separated from GA traffic; performance percentages are omitted from the expanded page pending baseline evidence.

Next: capture an actual discovery/filtering workflow; confirm performance baselines and enrollment measurement. Retain existing cover artwork until a suitable product screenshot is supplied.

## EngageON & Tellow AI

Sources: experience details supplied by Vishwanath for Telugu Labs.

- Technologies: Next.js, Node.js, Redis, MySQL, ClickHouse, Kafka, Cloudflare R2 and Razorpay.
- Work described: two SaaS products, event-driven backend workflows, image/video generation, character-training pipelines, flexible model integration, reusable full-stack components, dashboards and payments.
- The supplied details state reusable components reduced AI model onboarding time by 50%. No numeric API latency comparison was provided.

## EV Recovery Tracker

Sources: experience details supplied by Vishwanath for Eveez.

- Technologies: Next.js, Node.js, SQL, MongoDB, AWS S3 and Tailwind CSS.
- Work described: live status and battery insights, chassis-number validation, S3 image uploads, vehicle health and recovery dashboards, third-party telemetry/GPS APIs, authentication and deployment support.
- No fleet scale, recovery time or telemetry uptime was supplied.

## MinSpend

Source: `/home/pavan/Downloads/Expense-Tracker-android-playstore`.

- `app/build.gradle.kts`: Kotlin, Jetpack Compose, Room, WorkManager and Hilt.
- `sms/SmsEngine.kt`: sender-specific ordered matching, common-pattern fallback and bounded repeated matching.
- `sms/SmsDedup.kt`: reference-aware deduplication and within-batch duplicate checking. Two different references preserve two payments even when their amount and timing match.
- `sms/SmsAutoSave.kt`: explicit uncategorized fallback.
- `app/src/test/.../SmsDedupTest.kt`: tests for reference and batch behavior exist; they were read, not executed as part of portfolio validation.
- `report/ReportPdfGenerator.kt`, `ReportCsvGenerator.kt`, `data/backup/`, `reminders/`, widget resources: reporting, backup, reminders and widget implementation.
- Internal testing status comes from existing portfolio context. No public launch, user count, parser accuracy or test-pass claim is inferred from source alone.

Next: capture home, import review and budget screens with demo data; record a short import-to-report walkthrough. No suitable app screenshots were found in the reviewed checkout, so existing cover artwork remains. Do not publish raw banking SMS datasets or financial records.

## Abnormal Event Detection

Public source: https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway

- Inspected `YOLO_Video.py`, README, presentation PDF and extracted text/images from `Final documentation.docx`.
- `YOLO_Video.py`: four class names, confidence gate above 0.5, audio signaling, clip writing and Cloudinary uploads.
- `static/images/1.jpg`: source of the full detection montage shown on the page. Examples are not an accuracy benchmark.
- The report establishes January–May 2024 as the development period. Public copy focuses on the system and implementation, per the user's preference; it does not make a sole-authorship claim.
- The document lists evaluation figures, but usable numerical results were not found in the extracted content. No accuracy, FPS, mAP or precision/recall values are published.
- Presentation and report links remain on the project page. No automatic authority-notification claim is made from the reviewed code.

Next: capture the real Flask dashboard and a short annotated demonstration; document a held-out evaluation before adding accuracy claims.

## Shared presentation

Implemented: dark/green pages, dated metric strip, four-stage architecture flow, engineering decisions, captioned full-size evidence images and document links. Homepage features use the same project records as detail pages. Website contact is `hello@vishwanathkarka.com`; the supplied résumé PDF is unchanged in this pass.
