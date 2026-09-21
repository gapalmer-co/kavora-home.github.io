# V4 — Functional image mapping & QA

- Fixed dynamic Shop cards using stale local image filenames.
- Updated `data/catalog.json` so every product points to its real-photo URL.
- Fixed every product-detail page that incorrectly generated `../https://...` image paths.
- Kept the real-photo approach and deterministic product-to-image mapping.
- Corrected the electric kettle category to Small Appliances.
- Aligned the toaster product name/description with its actual photograph.
- Added consistent image containment/padding for cards and product detail pages.
- Added V4 image source documentation.

# KAVORA Changelog

## V3 — Real Photography Update
- Replaced generated-looking product photography with real Wikimedia Commons photographs.
- Removed old local placeholder/product images from the asset folders.
- Kept each featured product mapped to a different photograph.
- Improved product-image sizing so the actual photograph fills the card naturally.
- Replaced banner images that contained embedded promotional text with clean kitchen photography; promotional copy remains HTML.
- Added `docs/IMAGE-SOURCES-V3.md` with source and license information.
