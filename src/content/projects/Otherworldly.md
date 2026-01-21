---
title: "Otherworldly Network"
description: "A long-running Minecraft server series focused on custom world generation, infrastructure, and community-scale systems."
year: 2021
status: "Active"
tags:
  - minecraft
  - infrastructure
  - worldgen
  - communities
  - servers
tech:
  - Paper
  - Velocity
  - Pterodactyl
  - Terra
  - YAML
  - GitHub
  - Linux
  - MySQL
heroImage: "/images/projects/otherworldlylogo.png"
liveUrl: "https://otherworldly.live" # optional: remove if you don't have a public link
---

## Overview

**Otherworldly** is a long-running server series I started in **2021**. It’s a technical playground and a community project: part infrastructure, part worldbuilding experiment, part “how far can I push a server stack before it pushes back”.

The focus is on building a stable, scalable environment where custom generation, plugins, and player-driven systems can coexist without collapsing under maintenance overhead.

## What I’m building

- A multi-server structure with clear separation of concerns (proxy, backend servers, shared services)
- Custom world generation with a strong emphasis on biome identity, traversal, and exploration
- A plugin ecosystem tuned for long-term play and community-scale governance
- A workflow for updating configs and content safely without breaking production

## Technical focus

- **Infrastructure:** service management, deployment discipline, backups, and operational stability
- **Worldgen:** Terra configuration, biome control, and compatibility work across plugins and tools
- **Performance:** avoiding common scaling traps (chunk generation cost, plugin hotspots, database strain)
- **Reliability:** predictable behavior, reduced “mystery bugs”, and clearer debugging pathways

## Lessons & learning

This project is where I’ve learned most of the practical skills that don’t show up in tutorials:
how to troubleshoot messy plugin interactions, how to work with real constraints, and how to keep a complex system maintainable over years rather than weeks.

## Current status

Active development continues with ongoing iteration on:
worldgen tuning, plugin compatibility, and the overall server pipeline.
