# Backstage Template Template

This repository provides a template for building your own repository that
contains a set of [Backstage Software Templates](https://backstage.io/docs/features/software-templates/).

A default Node.js Backend template is included. It assumes you've configured
[GitHub Apps Integration](https://backstage.io/docs/integrations/github/github-apps/#app-permissions).

## Usage

1. Click the **Use this template** button in the top-right corner of this
repository, and select **Create a new repository**. 
1. Click the _location.yaml_ in your new repository.
1. Copy the URL in your browsers address bar, and add it to your Backstage [catalog configuration](https://backstage.io/docs/features/software-catalog/configuration/#static-location-configuration),
or add it using the Backstage user-interface.

All _template.yaml_ files in subdirectories of the _tempaltes/_ directory will
be imported into Backstage according to your configured catalog processing
interval. This means new templates added to the _templates/_ directory will
might take a few minutes to appear in the Backstage Software Catalog, unles you
manually refresh the Location Entity using the Backstage UI.